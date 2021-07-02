from tkinter import *
from tkinter import messagebox

def convert():
    rupee=data.get()*74.09
    messagebox.showinfo("Converted...","The rupee is: "+str(rupee))

window=Tk()
window.title("Maths Tables")
window.geometry("500x400")


frame1=Frame(window,width=100,highlightbackground="red",highlightthickness=3)
frame1.grid(row=0,column=0,padx=20,pady=20,ipadx=20,ipady=20)

l1=Label(frame1,text="Enter The Dollar:",fg="blue",font=(16))
l1.grid(row=0,column=0,padx=10,pady=10,)
data=IntVar()
textbox=Entry(frame1,textvariable=data,fg="blue",font=(16))
textbox.grid(row=0,column=1)
button1=Button(frame1,command=convert,text="Conver to Rupee",fg="blue",font=(16))
button1.grid(row=1,column=1)
window.mainloop()