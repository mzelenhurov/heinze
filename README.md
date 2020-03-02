# heinze

pip install virtualenv
virtualenv -p /usr/bin/python3.6 venv
source venv/bin/activate

pip install -r requirements.txt
./manage.py migrate
./manage.py collectstatic
./manage.py runserver