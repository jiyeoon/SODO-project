from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings

"""
유저 정보
1. 일단 유저 정보랑 1:1 매칭
2. 프로필 소개같은거
3. 닉네임
4. 사진
"""

class Account(models.Model):
    objects = models.Manager()
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=200, blank=True)
    nickname = models.CharField(max_length=50, default='anonymous')
    profile_image = models.ImageField(blank=True)

    def __str__(self):
        return self.nickname



"""
@receiver(post_save, sender=User)
def create_account(sender, instance, created, **kwargs):
    if created:
        Account.objects.create(account=instance)

@receiver(post_save, sender=User)
def save_user_account(sender, instance, **kwargs):
    instance.account.save()
"""
