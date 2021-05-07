# package word
import docx
import json
# from pymongo import MongoClient
import os
import sys
# Open file word
doc = docx.Document('./public/'+sys.argv[1])
all_text = doc.paragraphs

demo=[]
# Lưu câu hỏi
answer=[]
# Lưu vị trí
index=0
luutamthoi = {}
answerthamthoi = []
trueanswer=[]
exams=[]
sothutu=[]
def TimCauHoi(a):
    cauhoi = a.text
    # Nhận câu hỏi và đáp án theo ký tự
    words=['PART 1','Câu3','1)','2)','3)','###']
    words1 = ['A', 'B', 'C', 'D', 'E', 'F']
    words11 = []
    # Xử lý ký tự đầu đáp án
    for i in words1:
        words11.append(i + ')')
        words11.append(i + '/')
        words11.append(i + '.')
    # XXử lý ký tự đầu câu hỏi
    for i in range(0,100):
        words.append(str(i)+')')
        words.append('Câu' + str(i))
        words.append('Câu ' + str(i))
        words.append(str(i) + '/')
        words.append(str(i) + '.')
    # Xử lý dòng văn bản chuyển sang ký tự đặt biệt để nhận biết câu hỏi và đáp án
    # For tìm câu hỏi
    for word in words:
       #  For tìm đáp án
       for worda in words11:
            # Kiểm tra có phải là câu hỏi không
            if word in cauhoi:
                cauhoi = cauhoi.replace(word, '###')
                a.text=cauhoi
            # Kiểm tra có phải là đáp án không
            if worda in cauhoi:
                for run in a.runs:
                    if run.bold:
                        cauhoi = cauhoi.replace(worda, '$$')
                    else:
                        cauhoi = cauhoi.replace(worda, '**')
                a.text = cauhoi
    return (a.text)

for a in all_text:
      if "###" in TimCauHoi(a):

        if answerthamthoi !=[]:
            luutamthoi["Answer"] = answerthamthoi
            luutamthoi["Truenswer"] = trueanswer
            luutamthoi["image"] = luuanh
            exams.append(luutamthoi)
            luuanh=[]
            luutamthoi={}
            answerthamthoi=[]
            trueanswer=[]
            index = index + 1
        cauhoi = TimCauHoi(a).replace('###', '')
        luutamthoi['Question'] = cauhoi
    if "**" in TimCauHoi(a):
        dapan=TimCauHoi(a).replace('**','')
        answerthamthoi.append(dapan)
    if "$$" in TimCauHoi(a):
        dapandung = TimCauHoi(a).replace('$$', '')
        trueanswer.append(dapandung)
    if "#End" in TimCauHoi(a):
        luutamthoi["Answer"] = answerthamthoi
        luutamthoi["Trueanswer"] = trueanswer
        luutamthoi["image"] = luuanh
        exams.append(luutamthoi)
        break
    # print(a.text)

# print('Hello')
# # Chuyen sang json không dùng để đẩy lên mongo hoặc nodejs vì sẽ sang dang string
examjson=json.dumps(exams)
print(examjson)
# # os.remove("review.html")
#
# cluster = MongoClient("mongodb://localhost:27017/")
# # Ten database va collection
# db = cluster ['test']
# collection = db['test']
# # Neu khong co gia tri ID thi se random ID
# post = {"_id":6,'name': exams,"score":5}
# # Thêm 1
# collection.insert_one(post)
# #Thêm nhiều
# # collection.insert_many([post])
# # Tìm kiếm
# # results = collection.find({"name":"khoa"})
# # for result in results:
#     # print(result['_id'])
