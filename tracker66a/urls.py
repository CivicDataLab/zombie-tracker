from django.urls import path
from . import views


urlpatterns = [
              path('', views.index, name='index'),
              path('data_66a_cases', views.data_66a_cases, name='data_66a_cases'),
              path('data_66a_cases/<str:from_date>/<str:to_date>/', views.data_66a_cases_period, name='data_66a_cases_period'),
]

