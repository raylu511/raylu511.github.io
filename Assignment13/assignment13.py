# Part A:
# Create a list called myList with 8 values
# Assign the values (from position 1 to the end) of myList to a new         listmyList2
# append a new item to myList2 , remove the 3rd item then assign the list to
# myList3


myList = [1,2,3,4,5,6,7,8]
print(myList)
pos = myList[1:]
myList2 = pos
print(myList2)
myList2.append(9) 
del myList2[2] 
myList3 = myList2
print(myList3)

#Part B:

#count(sub,[start,[end]])
#Returns the number of occurences of a substring
word = 'hello'
print(word.count('l',0,5))

#endswith(suffix,[start,[end]])
#Returns true if string ends with given substring
print(word.endswith('lo',3))

#find/index(sub,[start,[end]])
#Returns index of substring if found
print(word.index('l'))

#isalnum()
#Returns true if string consists of only letters and numbers
print(word.isalnum())

#isalpha()
#Returns true if all characters are letters
print(word.isalpha())

#isdigit()
#Returns true if all characters are digits
print(word.isdigit())

#islower()
#Returns true if all letters are lowercase
print(word.islower())

#isspace()
#Returns true if string only consists of white spaces
print(word.isspace())

#istitle()
#Returns true if each word starts with upper case letter
print(word.istitle())

#isupper()
#Returns true if all letters are upper case
print(word.isupper())

#join()
#Joins tuples or dictionarys into a string
randomTuple = ("Ray", "John", "Derek")
joinTuple = " ".join(randomTuple)
print(joinTuple)

#lower()
#Changes all letters to lower case
print(word.lower())

#replace(old,new[,count])
#Replaces the selected substring with new substring
newWord = 'This is a string'
print(newWord.replace('is','was'))


#split([sep[,maxsplit]])
#Splits the string into a list with indicated seperator
print(newWord.split(' '))

#splitlines([keepends])
#Splits the string at line breaks and returns a list
newWord = 'This\nis\na\nstring'
print(newWord.splitlines())

#startswith(prefix[,start[,end]])
#Returns true if string starts with specified value
newWord = 'This is a string'
print(newWord.startswith('This'))

#strip([chars])
#Removes whitespaces from beginning and end of the string
newWord = '            Hello!     '
print(newWord.strip())

#upper()
#Turns all letters into upper case
newWord = 'This is a string'
print(newWord.upper())


#Part C
# Project 5 Description:

  #Budget tracker web app that asks for the user's budget, and allows them to input
  #mutliple expenses. The app will display the budget, all the expenses, total expenses,
  #and remainding money.

#Group:
#Ray Lu - Node/Express
#Cirill - Database/Wireframe
#Shalif Shaoul - HTML/CSS



















