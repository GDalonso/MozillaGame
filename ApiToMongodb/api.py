#encoding: utf-8

from flask import Flask, render_template, request, redirect, session, flash, url_for
from database import dbinsert, dbretrieve
import json
app = Flask(__name__)

'''
To run:
export FLASK_APP=api.py
export FLASK_ENV=development
flask run
'''
@app.route('/')
def index():
    # return "It's alive!"
    return(render_template('home.html'))
'''
Return a Json with all contents of the collection
'''
@app.route('/getcards')
def get_cards():
    # todo fix utf8 encoding
    return json.dumps(dbretrieve(), ensure_ascii=False).encode('utf8')

@app.route('/novoscenario')
def formcreateuser():
    '''
    Shows the new user creation screen to the user
    '''

    # if 'user_logged' not in session or session['user_logged'] == None:
    #     # Dynamic route to the login function
    #     return redirect(url_for('formlogin', proxima=url_for('index')))
    return render_template('criacard.html', titulo='Novo Scenario')

@app.route('/criarscenario', methods=['POST',])
def createuser():
    '''
    Create a Scenarios
    '''

    # dblogaction({'Log': str(request), 'ip': request.remote_addr, 'time': datetime.now()}) #Log the action to the database

    '''
{teacherCard: {description: 'BATATA', power: 4},
playerCards: [{description: 'Parábola Crescente', power: 5},
            {description: 'Parábola Decrescente', power: 3},
            {description: 'Reta', power: 1}]}

    '''
    scenario = {}
    # Form contents
    scenario['teacherCard'] = {'description': request.form['teacherdescription']}
    scenario['teacherCard']['power'] = 4
    scenario['playerCards']=[
    {'description':request.form['correct'] , 'power': 5},
    {'description':request.form['incorrect'] , 'power': 3},
    {'description':request.form['bad'] , 'power': 1},
    ]

    # Insert the object converted to dict in the database
    dbinsert(scenario)

    # Dynamic route to the index function
    return redirect(url_for('formcreateuser'))

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response
