print('Witaj w kalkulatorze prostym!!')
a=int(input("wpisz pierwsza liczbe:"))
b=int(input("wpisz druga liczbe:"))
ins=int(input("wybierz instrukcje: 1-dodawanie, 2-odejmowanie, 3-mnozenie, 4-dzielenie:"))
c=a+b
d=a-b
e=a*b
f=a/b
if ins ==1:{
print('wybrales dodawanie'):
print(f'wynikiem jest liczba {c}')
}
    
if ins ==2:{
print('wybrales odejmowanie'):
print(f'wynikiem jest liczba {d}')
}
    
if ins ==3:{
print('wybrales mnozenie'):
print(f'wynikiem jest liczba {e}')
}
    
if ins ==4:{
print('wybrales dzielenie'):
print(f'wynikiem jest liczba {f}')
}
    
if ins < 1:{
print('Niema takiej instrukcji')
}
    
if ins > 4:{
print('Niema takiej instrukcji')
}
