from django.db import models
from django.contrib.auth.models import User
from Accounts.models import Account
from django.conf import settings


# Create your models here.


class PostingForm(models.Model):
    #posting 내용. 게시글 작성자 / 글 제목 / 글 내용 정도 필요함.
    objects = models.Manager()
    posting_title = models.CharField(max_length=200, blank=False, null=False)
    posting_author = models.ForeignKey(User, on_delete=models.CASCADE, blank=False, null=False)
    posting_content = models.TextField()
    posting_createtime = models.DateTimeField(auto_now_add=True)
    posting_image = models.ImageField(blank=True, null=True)
    #posting_comments = models.ForeignKey(Comment, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.posting_title

# 댓글 기능

class Comment(models.Model):
    objects = models.Manager()
    comment_of_posting = models.ForeignKey(PostingForm, on_delete=models.CASCADE, related_name='comments', null=True)
    comment_author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    comment_content = models.TextField()
    comment_createtime = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.comment_author.username