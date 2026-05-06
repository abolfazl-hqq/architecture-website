from rest_framework import viewsets
from .models import Project, Category, SiteSetting, QuickLink
from .serializers import ProjectSerializer, CategorySerializer, SiteSettingSerializer, QuickLinkSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class SiteSettingViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ویو فقط خواندنی برای تنظیمات سایت (فوتر)
    """
    queryset = SiteSetting.objects.all()
    serializer_class = SiteSettingSerializer

class QuickLinkViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ویو فقط خواندنی برای لینک‌های سریع فوتر
    """
    queryset = QuickLink.objects.all().order_by('order')
    serializer_class = QuickLinkSerializer