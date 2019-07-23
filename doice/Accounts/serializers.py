from rest_framework import serializers
from .models import Account
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# 접속 유지 중인지 확인할 시리얼라이저
class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('nickname', 'bio', 'profile_image')

# 유저 시리얼 라이저.. 접속 유지중인지..
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    account = AccountSerializer(required=False)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'account')

    def create(self, validated_data, instance=None):
        account_data = validated_data.pop('account')
        user = User.objects.create_user(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        Account.objects.update_or_create(user=user, **account_data)
        return user

"""
# 유저.. 회원가입 시리얼라이저
class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {"password" : {"write_only" : True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data["username"], None, validated_data["password"]
        )
        return user

# 로그인 시리얼라이저
class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials")
"""