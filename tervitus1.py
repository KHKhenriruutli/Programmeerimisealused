import random


# ainepunktid = int(input("sisestage ainepunktide arv: "))
# nädalad = int(input("sisestage nädalate arv: "))
# summa = (ainepunktid * 26) / 10
# print(round(summa))
#

# repetitions = int(input("mitu korda äratada: "))
# i = 0
# while i<repetitions:
#     print("rise and shine")
#     i += 1
#

# laps = int(input("sisesta ringide arv"))
# carrots = 0
# x = 0
# while x <= laps:
#     if x % 2 == 0:
#         carrots += x
#         x += 1
#     else:
#         x += 1
#         continue
#
# print(carrots)

# dicenum = int(input("Täringute arv: "))
# i = 0
# while i < dicenum:
#     print(random.randint(1, 6))
#     i += 1

#
#
xmany = int(input("mitu pöialpossi tahab õunu"))
count = 0
fullamount= 14
for count in range(xmany):
    i = random.randint(1,2)
    print(i)
    fullamount -= int(i)

#
#
#
#
# print(f"lumivalgekesel jäi {fullamount}")



