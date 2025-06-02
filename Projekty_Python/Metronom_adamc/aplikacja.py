import threading
import time
from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.button import Button
from kivy.uix.textinput import TextInput
from kivy.uix.label import Label
from kivy.core.audio import SoundLoader

class MetronomeApp(App):
    def build(self):
        self.title = 'Metronome'
        self.sound = SoundLoader.load('click.mp3')
        self.duration_input = TextInput(text='1.0', multiline=False, input_type='number')
        self.timer_duration_input = TextInput(text='10.0', multiline=False, input_type='number')
        self.history_label = Label(text='Historia ustawień:')
        self.metronome_running = False
        self.settings_history = []

        layout = BoxLayout(orientation='vertical')
        layout.add_widget(self.duration_input)
        layout.add_widget(self.timer_duration_input)

        self.button_start_stop = Button(text='Start')
        self.button_start_stop.bind(on_press=self.toggle_metronome)
        layout.add_widget(self.button_start_stop)

        layout.add_widget(self.history_label)

        return layout

    def toggle_metronome(self, instance):
        if not self.metronome_running:
            duration = float(self.duration_input.text)
            timer_duration = float(self.timer_duration_input.text)
            self.metronome_thread = threading.Thread(target=self.start_metronome, args=(duration, timer_duration))
            self.metronome_thread.start()
            self.button_start_stop.text = 'Stop'
        else:
            self.metronome_running = False
            self.button_start_stop.text = 'Start'
            self.update_history_label()

    def start_metronome(self, duration, timer_duration):
        self.metronome_running = True
        self.settings_history.append((duration, timer_duration))
        while self.metronome_running and timer_duration > 0:
            if self.sound:
                self.sound.play()
            time.sleep(duration)
            timer_duration -= duration
        self.metronome_running = False
        self.button_start_stop.text = 'Start'
        self.update_history_label()

    def update_history_label(self):
        history_text = 'Historia ustawień:\n'
        for entry in self.settings_history[-3:]:
            history_text += f'Częstotliwość: {entry[0]} s, Czas trwania: {entry[1]} s\n'
        self.history_label.text = history_text

if __name__ == '__main__':
    MetronomeApp().run()



















