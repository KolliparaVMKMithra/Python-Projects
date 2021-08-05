from tkinter import *

def getvals():
    val= userentry.get()
    print("val is",val)
    top = Tk()
    text = Text(top)
    if(val==""):
        text.insert(INSERT,"No number is entered!!")
        text.pack()
    else:
        for i in range(1,11):
            text.insert(INSERT,"{}X{}={}\n".format(val,i,int(val)*i))
            text.pack()

root = Tk()
root.geometry("655x333")

user = Label(root, text="Enter the Number: ")
user.grid(row=0, column=0)

uservalue = StringVar()

userentry = Entry(root, textvariable = uservalue)

userentry.grid(row=0, column=1)

Button(text="Submit",bg="orange",fg="black",font="Arial", command=getvals).grid(row=5, column=1)
print(userentry.get())




root.mainloop()




