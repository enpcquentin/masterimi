"""master_imi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from rest_framework.authtoken import views as authtoken_views
import django_cas_ng.views

from parcours_imi.admin import user_parcours_import_view


urlpatterns = [
    path('admin/import', user_parcours_import_view),
    path('admin/', admin.site.urls),
    path('cas/login', django_cas_ng.views.login, name='cas_ng_login'),
    path('cas/logout', django_cas_ng.views.logout, name='cas_ng_logout'),
    path('api/login', authtoken_views.obtain_auth_token),
    path('api/', include('parcours_imi.urls')),
]
