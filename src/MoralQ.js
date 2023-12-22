import React from "react";
import "./style.css";
import {useState} from "react";
export default function MoralQ(){
const [liste,SetListe]=useState([
  "واش كتعتقد أن الكذب يمكن أن يكون مبررًا في حالات معينة؟",
  "واش كتفضل تقديم الدعم المالي للفقراء على حساب تحسين الظروف الاقتصادية لنفسك؟",
  "واش كتعتقد أن الانتقام يمكن أن يكون شكلًا من أشكال العدالة؟",
  "واش كتعتبر الحب خطأً إذا كان بين أشخاص من أديان أو ثقافات مختلفة؟",
  "واش كتفضل العمل من أجل تحقيق الرغبات الشخصية على حساب مصلحة المجتمع؟",
  "واش كتعتقد أنه يمكن تبرير التمييز على أساس الجنس أو العرق في بعض الحالات؟",
  "واش كتعتقد أن الحكومة يجب أن تتدخل في حياة الأفراد للحفاظ على النظام؟",
  "واش كتعتبر أن التحالفات السياسية يمكن أن تكون أخلاقية حتى إذا كانت تتناقض مع قيمك الشخصية؟",
  "واش كتعتقد أن السلام يمكن تحقيقه بغض النظر عن الوسائل المستخدمة؟",
  "واش كتعتبر تقديم التضحية الشخصية من أجل الآخرين واجبًا أخلاقيًا؟"
]
)
const [choice,SetChoice]=useState([])
const [yes,SetYes]=useState(0)
const [no,SetNo]=useState(0)
const [index,SetIndex]=useState(0)
const [checked,SetChecked]=useState(true)
  const submition = () =>{
	  SetIndex(index+1)
	  SetChecked(true)
	  SetChoice((choice)=>[...choice,checked? "yes":"no"])
	  if(choice[choice.length-1]=="yes"){SetYes(yes+1)}else{SetNo(no+1)}
  }
	return(
	<>
	<div className="container">
	{choice.length==10? <><div>
المهم النسبة المئوية ديالك من اه و لا هي {yes*100/10}%  اه  و %{no*100/10} من لا</div>
	
	<div className="analysis-container">
       {yes*100/10 > no*100/10?<><div className="analysis yes">
        <p> كتبان عليك واحد الشخص متفتح ومفتوح على التفاوض والتحول فوجهات نظرك. كتظهر أن عندك استعداد لتبرير بعض الأمور بمواقف محددة، وكتكون عندك القدرة على استغلال الفرص لمصلحتك الشخصية وكتهتم بالناس من حولك. يمكن قول أنك واحد من الناس اللي كيتواجدوا بشكل إيجابي فالحياة، وكتفكر بالتفاصيل والسياق قبل ماتخدم أي قرار.</p>
          </div></>:
		  <div className="analysis no">
      <p>واش بزاف ديال جواباتك كانو لا؟ بصح كنقدروك على الالتزام ديالك بقيمك ومبادئك. كتبان عليك واحد الشخص متمسك بالقيم الشخصية بشكل قوي وكتفضل ثابت فآرائك. ممكن نقول أنك واحد من اللي معندوش مركز معين لتنحي، وكتمشي مع مبادئك حتى فواجهة التحديات. يمكن قول أنك متضامن مع المبادئ الأخلاقية ومستعد تتضحى بالمصلحة الشخصية باش تحترمها.</p>
    </div>
	   }
   </div>
	</> :
		
	 <><h1>أسئلة أخلاقية  </h1>
	<div>{liste[index]}</div>
	<div className="space">
	<input type="radio" value="yes" checked = {checked} onChange={(e) => SetChecked(true)} name ="m"/>اه  <br/>
	<input type="radio" value="no" checked = {!checked}  onChange={(e) => SetChecked(false)}  name ="m"/>لا <br/>
	<input className = "btn" type="button" onClick={submition} value="التالي " />
	</div></>}
	</div>
	</>
	)
}
