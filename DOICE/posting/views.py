from rest_framework import viewsets, permissions, generics
from .serializers import PostingFormSerializer, CommentSerializer
from .models import Comment, PostingForm
from rest_framework.response import Response
from Accounts.models import Account
from rest_framework.decorators import api_view



# Create your views here.

class PostingFormViewSet(viewsets.ModelViewSet):
    queryset = PostingForm.objects.all().order_by('-posting_createtime')
    serializer_class = PostingFormSerializer
    #permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(posting_author=self.request.user) ##?? 이게 되나
    

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

"""
@api_view(['get'])
def fetch_posting(request):
    posting_content = PostingForm.objects.all()
    serializer = PostingFormSerializer(posting_content, context={'request':request}, many=True)

    return Response(serializer.data)
"""