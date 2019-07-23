from django.urls import path, include, re_path
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register(r'Account', views.AccountViewSet)
router.register(r'User', views.UserViewSet)

app_name = 'Accounts'
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
