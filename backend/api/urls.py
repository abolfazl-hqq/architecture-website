from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, CategoryViewSet, SiteSettingViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'footer-contact', SiteSettingViewSet, basename='footer-contact')

urlpatterns = [
    path('', include(router.urls)),
]