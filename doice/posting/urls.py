from django.urls import path, include
from rest_framework import routers
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

router = routers.DefaultRouter()
router.register(r'posingform', views.PostingFormViewSet)
router.register(r'comment', views.CommentViewSet)

comment_list = views.CommentViewSet.as_view({
    'post' : 'create',
    'get' : 'list',
})

comment_detail = views.CommentViewSet.as_view({
    'get' : 'retrieve',
    'put' : 'update',
    'path' : 'partial_update',
    'delete' : 'destroy',
})

app_name = 'posting'
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

# 이거 굳이 필요 없는듯..ㅠㅠ~ 그냥 위의꺼에서도 된다 흑흑
urlpatterns += format_suffix_patterns([
    path('comments/', comment_list, name='comment_list'), # whole list
    path('comments/<int:comment_of_posting.pk>/', comment_detail, name='comment_detail'), #detail page
])