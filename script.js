const questions = [
  {q:"A message says your account will close in 10 minutes unless you confirm your password. What is safest?",a:["Reply with your password","Use the message link quickly","Visit the official site independently and report the message","Forward it to friends"],correct:2,why:"Urgency and password requests are warning signs. Use a trusted route to verify and report."},
  {q:"You receive an unexpected invoice attachment from a familiar name. What should you do?",a:["Open it because the name looks familiar","Verify with the sender through a separate trusted channel","Disable your security software first","Share it publicly"],correct:1,why:"Display names can be spoofed or accounts compromised. Verify unexpected files separately."},
  {q:"Which is the strongest sign that a message may be phishing?",a:["It uses your preferred font","It asks for a one-time code and threatens immediate account suspension","It contains a calendar date","It is short"],correct:1,why:"One-time codes are secrets. Never share them in response to an unexpected request."},
  {q:"You clicked a suspicious link and entered your password. What should you do first?",a:["Ignore it and hope for the best","Tell everyone your password","Change the password using the official site and contact IT/support","Delete the browser"],correct:2,why:"Act quickly: change the password through the official service, alert IT/support, and review account security."},
  {q:"How should you check an unexpected request for money from a manager?",a:["Pay immediately","Reply to the same message only","Verify using a known phone number or separate trusted channel","Assume it is real if the logo looks right"],correct:2,why:"Use an independent trusted channel, especially for payments or sensitive requests."}
];
let index=0, score=0, answered=false;
const count=document.getElementById("question-count"), question=document.getElementById("question"), answers=document.getElementById("answers"), feedback=document.getElementById("feedback"), next=document.getElementById("next"), result=document.getElementById("result");
function render(){
  answered=false; feedback.textContent=""; next.disabled=true; next.textContent=index===questions.length-1?"See results":"Next question";
  count.textContent=`QUESTION ${index+1} OF ${questions.length}`; question.textContent=questions[index].q; answers.innerHTML="";
  questions[index].a.forEach((label,i)=>{const b=document.createElement("button");b.className="answer";b.textContent=label;b.addEventListener("click",()=>choose(i));answers.appendChild(b)});
}
function choose(choice){
  if(answered)return; answered=true; const item=questions[index]; const buttons=[...answers.children];
  buttons.forEach((b,i)=>{b.disabled=true;if(i===item.correct)b.classList.add("correct");else if(i===choice)b.classList.add("wrong")});
  if(choice===item.correct){score++;feedback.textContent="Correct! "+item.why}else{feedback.textContent="Not quite. "+item.why}
  next.disabled=false;
}
next.addEventListener("click",()=>{if(!answered)return;if(index<questions.length-1){index++;render()}else{document.getElementById("quiz-box").hidden=true;result.hidden=false;const pct=Math.round(score/questions.length*100);result.textContent=`Your score: ${score}/${questions.length} (${pct}%). ${pct>=80?"Great work—keep practicing safe habits!":"Review the warning signs above and try again after refreshing the page."}`}});
render();
