from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, CategoryViewSet, SiteSettingViewSet, QuickLinkViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'site-settings', SiteSettingViewSet, basename='site-setting')
router.register(r'quick-links', QuickLinkViewSet, basename='quick-link')

urlpatterns = [
    path('', include(router.urls)),
]