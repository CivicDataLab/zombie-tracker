from django.shortcuts import render

# Create your views here.
def mainviz(request):
        return render(request, 'frontend/mainviz.html')
