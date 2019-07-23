from django.contrib import admin
from .models import Comment, PostingForm


class CommentInline(admin.TabularInline):
    model = Comment
    extra = 0


class PostingAdmin(admin.ModelAdmin):
    search_fields = ['posting_title']
    inlines = [CommentInline] #Comment 클래스 같이보기
    list_display = ('posting_title', 'posting_author', 'posting_createtime')

    

# Register your models here.
admin.site.register(PostingForm, PostingAdmin)
admin.site.register(Comment)

