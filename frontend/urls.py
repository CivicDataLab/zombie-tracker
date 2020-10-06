from django.urls import path
from . import views


urlpatterns = [
            path('mainviz', views.mainviz, name='mainviz'),
            ]
