import re
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Project, Category


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']
        read_only_fields = ['id']


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, max_length=64)
    password_confirm = serializers.CharField(write_only=True, min_length=8, max_length=64)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password_confirm', 'first_name', 'last_name']
        extra_kwargs = {
            'email': {'required': True},
        }

    def validate_username(self, value):
        # حداقل و حداکثر طول
        if len(value) < 3:
            raise serializers.ValidationError('نام کاربری باید حداقل ۳ کاراکتر باشد.')

        if len(value) > 20:
            raise serializers.ValidationError('نام کاربری باید حداکثر ۲۰ کاراکتر باشد.')

        # کاراکترهای مجاز: حروف انگلیسی، اعداد، زیرخط، نقطه
        if not re.match(r'^[a-zA-Z0-9_.]+$', value):
            raise serializers.ValidationError(
                'نام کاربری فقط می‌تواند شامل حروف انگلیسی، اعداد، زیرخط (_) و نقطه (.) باشد.')

        # عدم وجود فاصله
        if ' ' in value:
            raise serializers.ValidationError('نام کاربری نباید شامل فاصله باشد.')

        return value

    def validate_email(self, value):
        # فرمت استاندارد ایمیل
        if not re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', value):
            raise serializers.ValidationError('فرمت ایمیل صحیح نیست (مثال: name@example.com)')

        # طول کل ایمیل
        if len(value) > 254:
            raise serializers.ValidationError('ایمیل نمی‌تواند بیشتر از ۲۵۴ کاراکتر باشد.')

        return value

    def validate_password(self, value):
        errors = []

        # حداقل طول
        if len(value) < 8:
            errors.append('حداقل ۸ کاراکتر')

        # حداکثر طول
        if len(value) > 64:
            errors.append('حداکثر ۶۴ کاراکتر')

        # شامل حروف کوچک
        if not re.search(r'[a-z]', value):
            errors.append('حداقل یک حرف کوچک (a-z)')

        # شامل حروف بزرگ
        if not re.search(r'[A-Z]', value):
            errors.append('حداقل یک حرف بزرگ (A-Z)')

        # شامل عدد
        if not re.search(r'[0-9]', value):
            errors.append('حداقل یک عدد (0-9)')

        # شامل کاراکتر خاص
        if not re.search(r'[!@#$%^&*()_+\-=\[\]{};:<>|?]', value):
            errors.append('حداقل یک کاراکتر خاص (!@#$%^&*)')

        # جلوگیری از تکرار زیاد یک کاراکتر (مثل aaaa, 1111)
        if re.search(r'(.)\1{3,}', value):
            errors.append('عدم تکرار زیاد یک کاراکتر (مانند aaaa یا 1111)')

        # جلوگیری از رمزهای رایج
        common_passwords = ['password', '12345678', 'qwertyui', 'abcdefgh', '11111111', '00000000']
        if value.lower() in common_passwords:
            errors.append('رمز عبور بسیار ضعیف است، از رمز قوی‌تری استفاده کنید')

        if errors:
            raise serializers.ValidationError(f'رمز عبور باید شامل: {" - ".join(errors)} باشد.')

        return value

    def validate(self, data):
        if data['password'] != data['password_confirm']:
            raise serializers.ValidationError({'password': 'رمز عبور و تکرار آن مطابقت ندارند.'})

        if User.objects.filter(username=data['username']).exists():
            raise serializers.ValidationError({'username': 'این نام کاربری قبلاً ثبت شده است.'})

        if User.objects.filter(email=data['email']).exists():
            raise serializers.ValidationError({'email': 'این ایمیل قبلاً ثبت شده است.'})

        return data

    def create(self, validated_data):
        validated_data.pop('password_confirm')
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', '')
        )
        return user


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']