const quotes = [
  "Believe in yourself.",
  "Dream big, work hard.",
  "Stay hungry, stay foolish.",
  "Success starts with self-discipline.",
  "Small steps lead to big results.",
  "Never stop learning.",
  "Your only limit is your mind.",
  "Do it with passion or not at all.",
  "Make today count.",
  "Consistency beats motivation.",
  "Mistakes are proof that you're trying.",
  "Focus on progress, not perfection.",
  "Hard work always pays off.",
  "Every day is a fresh start.",
  "Great things take time.",
  "Action is the key to success.",
  "Stay positive and keep moving.",
  "Confidence comes from preparation.",
  "Be stronger than your excuses.",
  "Success is a journey, not a destination.",
  "Don't wait for opportunity. Create it.",
  "Learn something new every day.",
  "Discipline creates freedom.",
  "Keep going. You're getting closer.",
  "The best time to start was yesterday. The next best time is now.",
  "Push yourself beyond your limits.",
  "Failure is a stepping stone to success.",
  "Nothing changes unless you do.",
  "Your future depends on what you do today.",
  "Stay focused and never give up."
];
// console.log(quotes.length)
 const button = document.querySelector("button");
const quote = document.querySelector('h1');

 button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*30);
    quote.textContent = quotes[index];
 })
 
 button.addEventListener('mouseenter',()=>{
  button.style.backgroundColor = "white";
  button.style.border = "1px solid black"
 })

 button.addEventListener('mouseleave',()=>{
  button.style.backgroundColor = "yellow";
  button.style.borderRadius = "10px";
 })