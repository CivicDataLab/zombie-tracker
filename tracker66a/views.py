from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from .models import IffDbAct, IffDbCaseDetails
import pandas as pd


def index(request):

    return HttpResponse('Welcome to 66A Tracker home page. Stay Tuned. We will be up Soon!')

def data_66a_cases(request):

    data = IffDbCaseDetails.objects.filter(is66a=True).values('cino', 'state_name', 'district_name', 'dt_regis', 'disp_nature', 'disp_name', 'judgment_link')
    output = list(data)
    return JsonResponse(output, safe=False)

def f(x):
        d = {}
        d['total']    = len(x)
        d['pending']  = len(x[x['disp_nature'] == '0'])
        d['disposed'] = len(x[x['disp_nature'] != '0'])
        d['judgement']= len(x[x['judgment_link'].notnull()])
        return pd.Series(d, index=['total', 'pending', 'disposed', 'judgement'])

STATE_NAMES = {
  'AP': 'Andhra Pradesh',
  'AR': 'Arunachal Pradesh',
  'AS': 'Assam',
  'BR': 'Bihar',
  'CT': 'Chhattisgarh',
  'GA': 'Goa',
  'GJ': 'Gujarat',
  'HR': 'Haryana',
  'HP': 'Himachal Pradesh',
  'JH': 'Jharkhand',
  'KA': 'Karnataka',
  'KL': 'Kerala',
  'MP': 'Madhya Pradesh',
  'MH': 'Maharashtra',
  'MN': 'Manipur',
  'ML': 'Meghalaya',
  'MZ': 'Mizoram',
  'NL': 'Nagaland',
  'OR': 'Odisha',
  'PB': 'Punjab',
  'RJ': 'Rajasthan',
  'SK': 'Sikkim',
  'TN': 'Tamil Nadu',
  'TG': 'Telangana',
  'TR': 'Tripura',
  'UT': 'Uttarakhand',
  'UP': 'Uttar Pradesh',
  'WB': 'West Bengal',
  'AN': 'Andaman and Nicobar Islands',
  'CH': 'Chandigarh',
  'DN': 'Dadra and Nagar Haveli and Daman and Diu',
  'DL': 'Delhi',
  'JK': 'Jammu and Kashmir',
  'LA': 'Ladakh',
  'LD': 'Lakshadweep',
  'PY': 'Puducherry',
  'TT': 'India',
  '[UNASSIGNED_STATE_CODE]': 'Unassigned',
}


def data_66a_cases_period(request, from_date, to_date):

    all_data      = pd.DataFrame(list(IffDbCaseDetails.objects.filter(is66a=True).values('cino', 'state_name', 'date_of_decision','district_name', 'dt_regis', 'disp_nature', 'disp_name', 'judgment_link')))
    filtered_data = all_data[(all_data['dt_regis'] >= pd.to_datetime(from_date).date()) & (all_data['dt_regis'] <= pd.to_datetime(to_date).date())] 
    data_grpd     = filtered_data.groupby(['state_name', 'district_name'], as_index=False).apply(f).reset_index(drop=True)
    state_code = {}
    for key, value in STATE_NAMES.items():
            state_code[value] = key
    data_grpd['state_code'] = data_grpd.apply(lambda x: state_code[x['state_name']], axis=1)  

    data_json = {}
    for index, row in data_grpd.iterrows():
            state    = row['state_code']
            district = row['district_name']
            total    = row['total']
            pending  = row['pending']
            disposed = row['disposed']
            judgement= row['judgement']
            if state not in data_json:
                data_json[state] = {}
                data_json[state]['total'] = {'total':0, 'pending':0, 'disposed':0, 'judgement':0}
            if 'districts' not in data_json[state]:
                data_json[state]['districts'] = {} 
            data_json[state]['districts'][district] = {}
            data_json[state]['districts'][district]['total'] = {'total':total, 'pending':pending, 'disposed':disposed, 'judgement':judgement}
            data_json[state]['total']['total'] = data_json[state]['total']['total'] + total
            data_json[state]['total']['pending'] = data_json[state]['total']['pending'] + pending
            data_json[state]['total']['disposed'] = data_json[state]['total']['disposed'] + disposed
            data_json[state]['total']['judgement'] = data_json[state]['total']['judgement'] + judgement
            data_json['TT'] = {'total':{'total':len(filtered_data), 'pending':len(filtered_data[filtered_data['disp_nature'] == '0']), 'disposed':len(filtered_data[filtered_data['disp_nature'] != '0']), 'judgement':len(filtered_data[filtered_data['judgment_link'].notnull()])}}
    return JsonResponse(data_json, safe=False) #HttpResponse(from_date)

