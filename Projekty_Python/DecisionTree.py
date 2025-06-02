import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import LabelEncoder
from sklearn.tree import DecisionTreeClassifier, plot_tree

# Dane
wiek = np.array([20, 25, 50, 38, 24, 56, 47, 32, 35, 22, 25, 40, 53, 21, 29, 59]).reshape(-1, 1)
dzien_tygodnia = ['wtorek', 'środa', 'czwartek', 'sobota', 'środa', 'niedziela', 'poniedziałek', 'piątek', 'sobota', 'sobota', 'piątek', 'wtorek', 'czwartek', 'środa', 'czwartek', 'sobota']
pogoda = ['słońce', 'deszcz', 'deszcz', 'słońce', 'słońce', 'słońce', 'słońce', 'deszcz', 'deszcz', 'słońce', 'deszcz', 'słońce', 'deszcz', 'słońce', 'deszcz', 'deszcz']
samopoczucie = ['dobre', 'dobre', 'złe', 'złe', 'złe', 'dobre', 'złe', 'dobre', 'złe', 'złe', 'dobre', 'dobre', 'złe', 'dobre', 'złe', 'dobre']
fundusze = np.array([0, 50, 100, 100, 30, 0, 100, 100, 0, 50, 100, 20, 0, 100, 50, 0]).reshape(-1, 1)
aktywnosc = ['sport', 'kino', 'dom', 'sport', 'kino', 'sport', 'kino', 'impreza', 'dom', 'impreza', 'impreza', 'sport', 'dom', 'sport', 'kino', 'dom']

# Kodowanie etykiet
encoder_dzien = LabelEncoder()
encoder_pogoda = LabelEncoder()
encoder_samopoczucie = LabelEncoder()
encoder_aktywnosc = LabelEncoder()

dzien_encoded = encoder_dzien.fit_transform(dzien_tygodnia)
pogoda_encoded = encoder_pogoda.fit_transform(pogoda)
samopoczucie_encoded = encoder_samopoczucie.fit_transform(samopoczucie)
aktywnosc_encoded = encoder_aktywnosc.fit_transform(aktywnosc)

# Łączenie zmiennych
X = np.column_stack((wiek, dzien_encoded, pogoda_encoded, samopoczucie_encoded, fundusze))

# Tworzenie modelu drzewa decyzyjnego
model = DecisionTreeClassifier()
model.fit(X, aktywnosc_encoded)

# Wizualizacja drzewa
plt.figure(figsize=(15, 10))
plot_tree(model, feature_names=['Wiek', 'Dzień tygodnia', 'Pogoda', 'Samopoczucie', 'Fundusze'], class_names=encoder_aktywnosc.classes_, filled=True, rounded=True)
plt.show()
