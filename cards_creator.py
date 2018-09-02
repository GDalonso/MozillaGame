from random import randint
import uuid
scenarios = []

hue = ""
for i in range(50):
    operations = ['+', '-', '*', '%']
    a = randint(1, 100)
    b = randint(1, 100)
    operand = randint(0, 2)
    answer = str(a)+operations[operand]+str(b)
    answer = eval(answer)

    a = {'xyzteacherCardxyz' : {
        'xyzdescriptionxyz' : "{} {} {} equals to: ".format(a,operations[operand],b),
        'xyzpowerxyz' : 4,
        'xyzidxyz': uuid.uuid4()},
        'xyzplayerCardsxyz' : [{
        'xyzdescriptionxyz' : "{}".format(answer),
        'xyzpowerxyz' : 5,},
      { 'xyzdescriptionxyz' : "{}".format(answer+randint(2, 13)),
        'xyzpowerxyz' : 3,},
      { 'xyzdescriptionxyz' : "{}".format(answer+randint(2, 27)),
        'xyzpowerxyz' : 1,}]}
    scenarios.append(a)
    # print(a)
    hue += str(a)

hue = hue.replace("'xyz", "")
hue = hue.replace("xyz'", "")
hue = hue.replace("}]}", "}]},\n")
print(hue)
