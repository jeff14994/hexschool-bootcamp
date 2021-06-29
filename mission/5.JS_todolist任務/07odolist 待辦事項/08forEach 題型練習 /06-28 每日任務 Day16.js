const data = {
    contentType: "application/json; charset=utf-8",
    isImage: false,
    data: {
        RtnCode: "00",
        DoctorInfo: [
        {
            DoctorName: "黃裕民",
            DeptCode: "06",
            DtTitle: "主治醫師",
            Exper: "高雄市立聯合醫院骨科主治醫師、高雄醫學大學附設醫院骨科部住院醫師、高雄醫學大學附設醫院骨科部總住院醫師、振興復健醫學中心骨科部住院醫師、和信治癌中心醫院外科住院醫師、德國基爾大學(CAU Kiel)醫學系",
            License: "手外科專科醫師",
            Special: "人工關節置換、骨折創傷、一般骨科、退化性關節炎、手外科"
        },
        {
            DoctorName: "侯郁芹",
            DeptCode: "40",
            DtTitle: "牙醫師",
            Exper: "兒童牙科專科醫師、身心障礙者(特殊需求者)牙科專科醫師",
            License: "無資料",
            Special: "兒童牙科、身心障礙者牙科(特殊需求者牙科)、一般牙科"
        },
        {
            DoctorName: "蕭慶隆",
            DeptCode: "06",
            DtTitle: "特約醫師",
            Exper: "高雄市立大同醫院骨科醫師、國防醫學院醫學士",
            License: "骨科專科醫師",
            Special: "一般骨科、膝關節內視鏡手"
        },
        {
            DoctorName: "鄭富榮",
            DeptCode: "20",
            DtTitle: "主治醫師",
            Exper: "高雄市立聯合醫院腎臟科主治醫師、中國醫學院醫學士中國醫學院醫學士",
            License: "內科醫學會專科醫師、腎臟科醫學會專科醫師",
            Special: "腎臟及泌尿系統感染、急性腎衰竭及慢性腎臟病、血尿與蛋白尿、血液透析及腹膜透析、電解質不平衡、糖尿病"
        },
        {
            DoctorName: "陳信宏",
            DeptCode: "20",
            DtTitle: "主治醫師",
            Exper: "高雄市立聯合醫院心臟內科主治醫師教育部部定講師高雄醫學大學理學碩士、高雄醫學院醫學士",
            License: "內科專科醫師證書、中華民國心臟學會專科醫師證書、中華民國心臟學會心臟血管介入專科醫師證書、重症專科醫師證書",
            Special: "冠狀動脈心導管診斷與血管支架介入治療、心臟節律器植入手術、心臟超音波檢查、高血壓、血脂異常、冠狀動脈疾病、狹心症、心肌梗塞、心臟衰竭症候群、心律不整、心臟內科學、一般內科學"
        },
        {
            DoctorName: "朱宜生",
            DeptCode: "06",
            DtTitle: "特約醫師",
            Exper: "國防醫學院醫學士、前國軍八二總醫院骨科主任、高雄市立大同醫院骨科醫師",
            License: "骨科專科醫師",
            Special: "一般骨科、創傷骨折、關節重建手術"
        }
        ]
    },
    id: "1b7002fa-479d-4d8f-bbc6-754ec692e88e",
    success: true
};
const DoctorInfo = data.data.DoctorInfo;
let classification = {};
let mainDoctorObj = [];
let dentistObj = [];
let specialistObj = [];
// Use set to make sure it doesn't repeat itself
let doctorList = new Set();
DoctorInfo.forEach((e) => {  
    let title = e.DtTitle
    mainDoctor = '主治醫師';
    dentist = '牙醫師';
    specialist = '特約醫師';
    isMainDoctor = mainDoctor === title;
    isDentist = dentist === title;
    isSpecialist = specialist === title;
    // Get all doctor title
    doctorList.add(title);
    // Get specific doctors' list
    if (isMainDoctor) {
        mainDoctorObj.push(e);
    };
    if (isDentist) {
        dentistObj.push(e);
    };
    if (isSpecialist) {
        specialistObj.push(e);
    };  
});
// console.log(doctorList);
// console.log(mainDoctorObj);
// Concate as key-value
const doctorListIterator = doctorList.values()
classification[doctorListIterator.next().value] = mainDoctorObj;
classification[doctorListIterator.next().value] = dentistObj;
classification[doctorListIterator.next().value] = specialistObj;
console.log(classification);
