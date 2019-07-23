from rest_framework import serializers
from .models import Comment, PostingForm
from django.contrib.auth import authenticate
from Accounts.serializers import UserSerializer, AccountSerializer
from django.contrib.auth.models import User

class CommentSerializer(serializers.ModelSerializer):
    #comment_author = UserSerializer()
    
    class Meta:
        model = Comment
        fields = ('id', 'comment_of_posting', 'comment_author', 'comment_content', 'comment_createtime')
    """
    def create(self, validated_data):
        user_data = validated_data.pop('comment_author')
        print(user_data)
        #comment = Comment.objects.create(**validated_data)
        user = User.objects.create_user(username=user_data['username'], password=user_data['password'], email=user_data['email'])
        comment = Comment.objects.create(comment_author=user, **validated_data)
        return comment
    """


class PostingFormSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    posting_author = UserSerializer()

    class Meta:
        model = PostingForm
        fields = ('id', 'posting_title', 'posting_author', 'posting_content', 'posting_createtime', 'posting_image' , 'comments')
    
    def create(self, validated_data):
        comments_data = validated_data.pop('comments')
        #postingform = PostingForm.objects.create(**validated_data)
        for comment_data in comments_data:
            comment_instance += Comment.objects.get_or_create(comment_of_posting=validated_data["postingform"], **comment_data)
        postingform = PostingForm.objects.create(**validated_data, comments=comment_instance)
        return postingform