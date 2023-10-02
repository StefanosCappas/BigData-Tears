# Περιοχή δήλωσης βιβλιοθήκων.
import re
import json

# Περιοχή ανοίγματος του αρχείου
file = open('sample.json', 'r')
array = []
for i in file:
    array.append(i)
file.close()

# Περιοχή ευρέσεων του αριθμού των γραμμών.
index = 0
for row in array:
    index = index + 1
print(index)

# Περιοχή τοποθέτησης των κομμάτων όταν αλλάζει η γραμμή.
brray = ""
crray = []
for row in range(0, index):
    brray = ""
    for col in array[row]:
        if col == "\n" and row < 61:
            col = ",\n"
        brray = brray + col
    crray.append(brray)
#print(crray)

# Περιοχή εγγραφής του αποτελέσματος σε νέο json αρχείο μαζί με τις αγκύλες.
dile = open('AIR1.json', 'w')
dile.write("[")
for i in range(0, index):
    dile.write(crray[i])
dile.write("]")
dile.close()