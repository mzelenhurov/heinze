# heinze

pip install virtualenv
virtualenv -p /usr/bin/python3.6 venv
source venv/bin/activate

pip install -r requirements.txt

change EMAIL_PORT in settings.py if need

./manage.py migrate
./manage.py collectstatic
./manage.py runserver