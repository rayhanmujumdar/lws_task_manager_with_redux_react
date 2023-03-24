# Task manager with Rtk query

## Date: 23/03/2023

Agenda:

- functional Requirement analysis
- create a srs (software requirement specification
- choose techonology
- setup project

# Functional requirment:

- আমাদের দেয়া সার্ভারের '/projects' এবং '/teams' route এ হিট করলে project list ও team member list পাওয়া যাবে। আপনাকে project list এবং team list সার্ভার থেকে রিকুয়েষ্ট করে এনে টেমপ্লেট অনুযায়ী ui তে দেখাতে হবে। - **done**
- Project List দেখানোর সময় এটা নিশ্চিত করতে হবে যেন একেকটা প্রজেক্ট check এবং uncheck করা যায়। এবং আমাদের project list এর প্রতিটা আইটেমে/অবজেক্টে একটি property আছে "colorClass" নামে। আপনাকে project list দেখানোর সময় checkbox input element এ "colorClass" টি add করে দিতে হবে। এর ফলে প্রতিটি চেকবক্স আইটেমের কালার ভিন্ন ভিন্ন হবে। আপনি আমাদের দেয়া টেমপ্লেটটি দেখলে পুরোপুরি ক্লিয়ার হয়ে যাবেন। - **done**
- আমাদের সার্ভারের "/tasks" এন্ডপয়েন্টে GET রিকুয়েষ্ট করলে task list গুলো পাওয়া যায়। আপনাকে task list গুলো সার্ভার থেকে রিকুয়েষ্ট করে এনে আমাদের দেয়া টেমপ্লেট অনুযায়ী UI তে দেখাতে হবে। - **done**
- সাইডবার থেকে যেই যেই প্রজেক্ট select/check করা থাকবে শুধু ওই projects গুলো tasks এর মধ্যে দেখাতে হবে। ( এইখানে checked projects এর ডাটা দেখানোর জন্য ফিল্টারিং টা আপনি চাইলে সার্ভার সাইডেও করতে পারেন অথবা ক্লায়েন্ট সাইডেও করতে পারেন। )। - **done**
- প্রতিটি task এ একটি করে সিলেক্ট বক্স আছে, যেখান থেকে সিলেক্ট করলেই ওই অনুযায়ী tasks এর স্ট্যাটাস চেঞ্জ হয়ে যাবে। এখানে অবশ্যই সার্ভারের সাথে sync থাকতে হবে। অর্থাৎ UI এবং সার্ভার দুই জায়গাতেই status change হবে। - **done**
- প্রতিটি Task এ থাকা ডিলিট আইকনে ক্লিক করলে Task টি ডিলিট হয়ে যাবে। Task ডিলিটের ক্ষেত্রে আপনাকে Optimistic way তে কাজটি করতে হবে। অর্থাৎ Delete বাটনে চাপ দেয়ার সাথে সাথেই UI থেকে task টি ডিলিট হয়ে যাবে এবং কোন কারনে ডিলিট রিকুয়েষ্ট ফেইল হলে undo হয়ে UI তে চলে আসবে। - **done**
- Delete বাটনটি তখনই UI তে থাকবে যখন একটি task কমপ্লিট হয়ে যাবে অর্থাৎ task এর status "Complete" থাকবে। - **done**
- Add New বাটনে ক্লিক করলে task এড করার পেজে রাউটিং হবে এবং সেখান থেকে প্রয়োজনীয় ইনফরমেশনগুলো দিয়ে একটি নতুন Task তৈরি করা যাবে। Task create হয়ে গেলে আপনাকে pessimistic way তে task list/task list এর cache টি আপডেট করে দিতে হবে। - **done**
- Task এড করার ক্ষেত্রে team এবং project সিলেক্টের অপশনগুলো সার্ভার থেকে ফেচ হয়ে আসতে হবে (আপনি এর জন্য রিকয়ারমেন্ট ১ এ query hooks গুলো পেয়েই গেছেন, ওগুলাই ব্যাবহার করতে পারবেন)। Task এড হয়ে গেলে হোমপেজে রিডিরেক্ট করে দিতে হবে। - **done**
- প্রতিটি Task এ থাকা Edit বাটনে ক্লিক করলে টাস্ক এডিটের পেজে নিয়ে যাবে এবং সেখান থেকে যেই Task এর এডিট বাটনে ক্লিক করে আসা হয়েছে ওই টাস্কটি এডিট করা যাবে। এডিটের ক্ষেত্রেও আপনাকে এডিট হয়ে গেলে pessimistic way তে task list/task list এর cache টি আপডেট করে দিতে হবে। টাস্ক এড এর মতোই team এবং project সিলেক্টে বক্সের অপশনগুলো ডাইনামিক হবে। এখানেও আপনি টাস্ক এডিট হয়ে গেলে হোমপেজে রিডিরেক্ট করে দিতে পারেন। - **done**
- যখন একটি task কমপ্লিট অবস্থায় থাকবে তখন Edit বাটনটি UI তে দেখানো যাবে না। - done
- সবশেষে আপনাকে Navbar এ থাকা সার্চবক্সটিকে ফাংশনাল করতে হবে। সার্চ বক্সে টাস্কের name অথবা title দিয়ে সার্চ করা যাবে। এক্ষেত্রেও আপনি সার্ভার সাইড কিংবা ক্লায়েন্ট সাইড যেকোন এপ্রোচেই বেছে নিতে পারেন। - **done**

## Requirement analysis:

**RTK query Models analysis: → (folder name) → feature**

S**lice Name:**

******************API slice******************

- api - (root)
    - create a api slice and implement baseUrl
- task
    - getTasks
    - getTask
    - addTask → use pessimistic cache update
    - editTask → use pessimistic cache update
    - deleteTask → use Optimistic cache update
- projects
    - getProjects
    - getProject
- team
    - getTeams
    - getTeam

********Reducer: →******** 

- filter
    - addProjectsName
    - removeProjectsName
    - filterSearchBox

## Choose technology:

- React library
- react-router-dom
- react-redux
- redux-toolkit with rtk query
- tailwind css
- moment

## Deploy link:

- Github link: https://github.com/Learn-with-Sumit/batch-2---assignment-9---task-manager-with-rtk-query-rayhanmujumdar
- Live LInk:
- Server Link: http://localhost:9000