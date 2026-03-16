const questionsDB = [
    // =====================================================================
    // תת-נושא 1: בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור) (12 שאלות)
    // =====================================================================
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question: "שתי מכוניות יצאו בו זמנית מעיר א' לעיר ב', המרחק ביניהן הוא 300 קילומטרים. המכונית הראשונה נסעה במהירות הגדולה ב-25 קמ\"ש ממהירות המכונית השנייה, ולכן הגיעה ליעדה שעה אחת לפני המכונית השנייה. מצאו את מהירות המכונית השנייה (האיטית יותר).",
        options: [
            "75 קמ\"ש",
            "100 קמ\"ש",
            "50 קמ\"ש",
            "60 קמ\"ש"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את מהירות המכונית השנייה (האיטית) כנעלם.", math_expression: "v" },
            { verbal_explanation: "מהירות המכונית הראשונה גדולה ב-25 קמ\"ש.", math_expression: "v + 25" },
            { verbal_explanation: "הזמן שלוקח למכונית השנייה לעבור 300 ק\"מ הוא הדרך לחלק למהירות.", math_expression: "300 / v" },
            { verbal_explanation: "הזמן שלוקח למכונית הראשונה לעבור את אותה הדרך.", math_expression: "300 / (v + 25)" },
            { verbal_explanation: "ידוע שהמכונית האיטית נסעה שעה אחת יותר מהמכונית המהירה. נבנה משוואה מתאימה.", math_expression: "300 / v - 300 / (v + 25) = 1" },
            { verbal_explanation: "נכפיל את המשוואה במכנה המשותף כדי להיפטר מהשברים.", math_expression: "300(v + 25) - 300v = v(v + 25)" },
            { verbal_explanation: "נפתח את הסוגריים בכל אגף.", math_expression: "300v + 7500 - 300v = v<sup>2</sup> + 25v" },
            { verbal_explanation: "נכנס איברים דומים ונעביר הכל לאגף אחד כדי ליצור משוואה ריבועית.", math_expression: "v<sup>2</sup> + 25v - 7500 = 0" },
            { verbal_explanation: "נפתור את המשוואה הריבועית בעזרת נוסחת השורשים. נקבל שורש אחד חיובי ושורש אחד שלילי.", math_expression: "v = 75 , v = -100" },
            { verbal_explanation: "מכיוון שמהירות אינה יכולה להיות שלילית, נפסול את הפתרון השלילי.", math_expression: "v = 75" }
        ],
        final_answer: "75"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question: "שני רוכבי אופניים יצאו זה לקראת זה משני יישובים שהמרחק ביניהם 400 קילומטרים. הם נפגשו לאחר 4 שעות. ידוע שמהירותו של הרוכב הראשון גדולה ב-20 קמ\"ש ממהירותו של הרוכב השני. מצאו את מהירות הרוכב השני.",
        options: [
            "40 קמ\"ש",
            "60 קמ\"ש",
            "50 קמ\"ש",
            "30 קמ\"ש"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את מהירות הרוכב השני כנעלם.", math_expression: "v" },
            { verbal_explanation: "מהירות הרוכב הראשון גבוהה בעשרים קמ\"ש.", math_expression: "v + 20" },
            { verbal_explanation: "נחשב את הדרך שעבר הרוכב השני עד הפגישה (זמן כפול מהירות).", math_expression: "4 &times; v" },
            { verbal_explanation: "נחשב את הדרך שעבר הרוכב הראשון עד הפגישה.", math_expression: "4(v + 20)" },
            { verbal_explanation: "סכום הדרכים שעברו שניהם יחד שווה למרחק הכולל בין היישובים.", math_expression: "4v + 4(v + 20) = 400" },
            { verbal_explanation: "נפתח סוגריים באגף שמאל.", math_expression: "4v + 4v + 80 = 400" },
            { verbal_explanation: "נכנס איברים ונעביר את המספר ימינה.", math_expression: "8v = 320" },
            { verbal_explanation: "נחלק בשמונה כדי לקבל את המהירות.", math_expression: "v = 40" }
        ],
        final_answer: "40"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question: "משאית תכננה לנסוע מרחק של 200 ק\"מ במהירות קבועה. לאחר נסיעה של שעתיים התעכבה המשאית למשך שעה. כדי להגיע ליעדה בזמן המתוכנן, הגדילה המשאית את מהירותה ב-20 קמ\"ש בדרכה הנותרת. מצאו את מהירותה ההתחלתית של המשאית.",
        options: [
            "40 קמ\"ש",
            "50 קמ\"ש",
            "60 קמ\"ש",
            "80 קמ\"ש"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את המהירות ההתחלתית המתוכננת.", math_expression: "v" },
            { verbal_explanation: "הזמן המתוכנן לכל הנסיעה הוא הדרך חלקי המהירות המתוכננת.", math_expression: "200 / v" },
            { verbal_explanation: "המשאית נסעה שעתיים במהירות הרגילה. הדרך שעברה בחלק הראשון:", math_expression: "2v" },
            { verbal_explanation: "הדרך שנותרה למשאית לעבור לאחר העיכוב:", math_expression: "200 - 2v" },
            { verbal_explanation: "המהירות החדשה בחלק השני של הנסיעה הוגדלה בעשרים.", math_expression: "v + 20" },
            { verbal_explanation: "הזמן שלקח לחלק השני של הנסיעה:", math_expression: "(200 - 2v) / (v + 20)" },
            { verbal_explanation: "סך הזמן בפועל (שעתיים נסיעה, שעה עיכוב, והזמן הנותר) שווה לזמן המתוכנן המקורי.", math_expression: "2 + 1 + (200 - 2v) / (v + 20) = 200 / v" },
            { verbal_explanation: "נפשט את המשוואה ונכפיל במכנה המשותף.", math_expression: "3v(v + 20) + v(200 - 2v) = 200(v + 20)" },
            { verbal_explanation: "נפתח סוגריים בכל האגפים.", math_expression: "3v<sup>2</sup> + 60v + 200v - 2v<sup>2</sup> = 200v + 4000" },
            { verbal_explanation: "נכנס איברים וניצור משוואה ריבועית מסודרת.", math_expression: "v<sup>2</sup> + 60v - 4000 = 0" },
            { verbal_explanation: "נפתור את המשוואה. נפסול את התשובה השלילית.", math_expression: "(v - 40)(v + 100) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; v = 40" }
        ],
        final_answer: "40"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question: "הולך רגל א' והולך רגל ב' יצאו בו זמנית מעיר לעבר קיבוץ, מרחק של 24 ק\"מ. מהירותו של הולך רגל א' גדולה ב-1 קמ\"ש ממהירותו של הולך רגל ב', ולכן הוא הגיע שעתיים לפניו. מצאו את מהירות הולך רגל ב'.",
        options: [
            "3 קמ\"ש",
            "4 קמ\"ש",
            "2 קמ\"ש",
            "5 קמ\"ש"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את מהירות הולך רגל ב' כנעלם.", math_expression: "v" },
            { verbal_explanation: "נגדיר את מהירות הולך רגל א'.", math_expression: "v + 1" },
            { verbal_explanation: "זמן ההליכה של הולך רגל ב'.", math_expression: "24 / v" },
            { verbal_explanation: "זמן ההליכה של הולך רגל א'.", math_expression: "24 / (v + 1)" },
            { verbal_explanation: "זמן הולך ב' גדול בשעתיים מזמן הולך א'.", math_expression: "24 / v - 24 / (v + 1) = 2" },
            { verbal_explanation: "נחלק את כל המשוואה בשתיים לפשטות חישוב.", math_expression: "12 / v - 12 / (v + 1) = 1" },
            { verbal_explanation: "נכפיל במכנה המשותף.", math_expression: "12(v + 1) - 12v = v(v + 1)" },
            { verbal_explanation: "נפתח סוגריים.", math_expression: "12v + 12 - 12v = v<sup>2</sup> + v" },
            { verbal_explanation: "נסדר כמשוואה ריבועית.", math_expression: "v<sup>2</sup> + v - 12 = 0" },
            { verbal_explanation: "נפתור בעזרת טרינום. שורש שלילי נפסל.", math_expression: "(v - 3)(v + 4) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; v = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question: "סירה שטה בנהר נגד הזרם למרחק 30 ק\"מ, ומיד שבה חזרה עם הזרם לאותה נקודה. זמן השיוט הכולל היה 8 שעות. ידוע כי מהירות זרם הנהר היא 2 קמ\"ש. מהי מהירות הסירה במים עומדים?",
        options: [
            "8 קמ\"ש",
            "10 קמ\"ש",
            "6 קמ\"ש",
            "12 קמ\"ש"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את מהירות הסירה במים עומדים.", math_expression: "v" },
            { verbal_explanation: "מהירות הסירה נגד הזרם מחושבת כמהירותה פחות מהירות הזרם.", math_expression: "v - 2" },
            { verbal_explanation: "מהירות הסירה עם הזרם מחושבת כמהירותה ועוד מהירות הזרם.", math_expression: "v + 2" },
            { verbal_explanation: "הזמן שלקח לסירה לשוט נגד הזרם.", math_expression: "30 / (v - 2)" },
            { verbal_explanation: "הזמן שלקח לסירה לשוט חזרה עם הזרם.", math_expression: "30 / (v + 2)" },
            { verbal_explanation: "הזמן הכולל שווה לשמונה שעות.", math_expression: "30 / (v - 2) + 30 / (v + 2) = 8" },
            { verbal_explanation: "נכפיל במכנה המשותף.", math_expression: "30(v + 2) + 30(v - 2) = 8(v - 2)(v + 2)" },
            { verbal_explanation: "נפתח סוגריים. באגף ימין נשתמש בהפרש ריבועים.", math_expression: "30v + 60 + 30v - 60 = 8(v<sup>2</sup> - 4)" },
            { verbal_explanation: "נכנס איברים משני האגפים.", math_expression: "60v = 8v<sup>2</sup> - 32" },
            { verbal_explanation: "נסדר כמשוואה ריבועית.", math_expression: "8v<sup>2</sup> - 60v - 32 = 0" },
            { verbal_explanation: "נחלק בארבע להקלת הפתרון.", math_expression: "2v<sup>2</sup> - 15v - 8 = 0" },
            { verbal_explanation: "נפתור משוואה ריבועית. הפתרון השלילי נפסל.", math_expression: "v = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question: "רוכב אופניים א' יצא לדרך. כעבור שעה יצא מאותו מקום ובאותו כיוון רוכב אופניים ב', שמהירותו גדולה ב-5 קמ\"ש מזו של רוכב א'. רוכב ב' השיג את רוכב א' 3 שעות לאחר שרוכב ב' יצא לדרך. מצאו את מהירותו של רוכב א'.",
        options: [
            "15 קמ\"ש",
            "10 קמ\"ש",
            "20 קמ\"ש",
            "12 קמ\"ש"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את מהירות רוכב א'.", math_expression: "v" },
            { verbal_explanation: "מהירות רוכב ב' גדולה בחמש.", math_expression: "v + 5" },
            { verbal_explanation: "זמן הרכיבה של רוכב ב' עד נקודת המפגש.", math_expression: "3" },
            { verbal_explanation: "רוכב א' יצא שעה קודם, לכן זמן הרכיבה הכולל שלו ארוך בשעה אחת.", math_expression: "3 + 1 = 4" },
            { verbal_explanation: "הדרך שעבר רוכב א'.", math_expression: "4v" },
            { verbal_explanation: "הדרך שעבר רוכב ב'.", math_expression: "3(v + 5)" },
            { verbal_explanation: "מכיוון שרוכב ב' השיג את רוכב א', הרי שהם עברו את אותה הדרך בדיוק. נשווה ביניהן.", math_expression: "4v = 3(v + 5)" },
            { verbal_explanation: "נפתח סוגריים ונעביר אגפים למציאת המהירות.", math_expression: "4v = 3v + 15 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; v = 15" }
        ],
        final_answer: "15"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question: "רכבת עושה דרך של 180 ק\"מ במהירות קבועה. בדרכה חזרה, נסעה הרכבת במהירות הגדולה פי 1.5 ממהירותה בהלוך. זמן הנסיעה הכולל (הלוך וחזור) היה 7.5 שעות. מצאו את מהירות הרכבת בהלוך.",
        options: [
            "40 קמ\"ש",
            "60 קמ\"ש",
            "50 קמ\"ש",
            "30 קמ\"ש"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את מהירות הרכבת בדרך הלוך.", math_expression: "v" },
            { verbal_explanation: "מהירות הרכבת בדרך חזור גדולה פי אחד וחצי.", math_expression: "1.5v" },
            { verbal_explanation: "זמן הנסיעה בדרך הלוך.", math_expression: "180 / v" },
            { verbal_explanation: "זמן הנסיעה בדרך חזור.", math_expression: "180 / 1.5v" },
            { verbal_explanation: "זמן הנסיעה הכולל שווה לשבע וחצי שעות.", math_expression: "180 / v + 180 / 1.5v = 7.5" },
            { verbal_explanation: "נפשט את השבר השני על ידי חלוקת המונה והמכנה באחד וחצי.", math_expression: "180 / v + 120 / v = 7.5" },
            { verbal_explanation: "נחבר את המונים מאחר והמכנה משותף.", math_expression: "300 / v = 7.5" },
            { verbal_explanation: "נכפיל במהירות ונחלץ אותה.", math_expression: "300 = 7.5v &nbsp;&nbsp;&rArr;&nbsp;&nbsp; v = 40" }
        ],
        final_answer: "40"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question: "רכב א' יצא מעיר א' לכיוון עיר ב' בשעה 8:00. רכב ב' יצא מעיר ב' לכיוון עיר א' בשעה 9:00. המרחק בין שתי הערים הוא 230 ק\"מ. הרכבים נפגשו בשעה 11:00. מהירות רכב א' גדולה ב-10 קמ\"ש ממהירות רכב ב'. מהי מהירות רכב ב'?",
        options: [
            "40 קמ\"ש",
            "50 קמ\"ש",
            "60 קמ\"ש",
            "30 קמ\"ש"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את מהירות רכב ב' כנעלם.", math_expression: "v" },
            { verbal_explanation: "מהירות רכב א' גדולה בעשר.", math_expression: "v + 10" },
            { verbal_explanation: "זמן הנסיעה של רכב א' (משמונה בבוקר ועד אחת-עשרה).", math_expression: "3" },
            { verbal_explanation: "זמן הנסיעה של רכב ב' (מתשע בבוקר ועד אחת-עשרה).", math_expression: "2" },
            { verbal_explanation: "הדרך שעבר רכב א'.", math_expression: "3(v + 10)" },
            { verbal_explanation: "הדרך שעבר רכב ב'.", math_expression: "2v" },
            { verbal_explanation: "הם נסעו זה לקראת זה ונפגשו, לכן סכום הדרכים שווה למרחק הכולל ביניהם.", math_expression: "3(v + 10) + 2v = 230" },
            { verbal_explanation: "נפתח סוגריים.", math_expression: "3v + 30 + 2v = 230" },
            { verbal_explanation: "נכנס איברים ונעביר אגף.", math_expression: "5v = 200" },
            { verbal_explanation: "נחלק בחמש ונמצא את המהירות המבוקשת.", math_expression: "v = 40" }
        ],
        final_answer: "40"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question: "רכב תכנן לעבור 500 ק\"מ במהירות קבועה. לאחר שנסע שעתיים, עצר להתרעננות במשך 30 דקות. כדי להגיע ליעדו בדיוק בזמן המתוכנן, הגדיל את מהירותו ב-25 קמ\"ש ביוצאו לדרך מחדש. מצאו את מהירותו ההתחלתית.",
        options: [
            "100 קמ\"ש",
            "80 קמ\"ש",
            "75 קמ\"ש",
            "90 קמ\"ש"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את המהירות ההתחלתית.", math_expression: "v" },
            { verbal_explanation: "הזמן המתוכנן לכל הדרך.", math_expression: "500 / v" },
            { verbal_explanation: "הרכב נסע שעתיים. הדרך שעבר בחלק הראשון היא פעמיים המהירות.", math_expression: "2v" },
            { verbal_explanation: "הדרך שנותרה לו לעבור לאחר העצירה.", math_expression: "500 - 2v" },
            { verbal_explanation: "המהירות החדשה שלו לאחר ההפסקה.", math_expression: "v + 25" },
            { verbal_explanation: "הזמן שנדרש לו לעבור את החלק השני של הדרך.", math_expression: "(500 - 2v) / (v + 25)" },
            { verbal_explanation: "הזמן הכולל (שעתיים נסיעה, חצי שעה עצירה, וזמן החלק השני) שווה לזמן המתוכנן.", math_expression: "2 + 0.5 + (500 - 2v) / (v + 25) = 500 / v" },
            { verbal_explanation: "נחבר זמנים ונכפיל במכנה משותף.", math_expression: "2.5v(v + 25) + v(500 - 2v) = 500(v + 25)" },
            { verbal_explanation: "נפתח סוגריים ונסדר למשוואה ריבועית.", math_expression: "2.5v<sup>2</sup> + 62.5v + 500v - 2v<sup>2</sup> = 500v + 12500" },
            { verbal_explanation: "נצמצם ונכפיל בשתיים לפשטות.", math_expression: "0.5v<sup>2</sup> + 62.5v - 12500 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; v<sup>2</sup> + 125v - 25000 = 0" },
            { verbal_explanation: "נפתור. הפתרון הרלוונטי הוא החיובי.", math_expression: "(v - 100)(v + 250) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; v = 100" }
        ],
        final_answer: "100"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question: "שתי רכבות יצאו בו זמנית זו לקראת זו משתי ערים שהמרחק ביניהן 600 ק\"מ. רכבת א' נוסעת במהירות של 80 קמ\"ש, ורכבת ב' נוסעת במהירות של 70 קמ\"ש. כמה שעות לאחר יציאתן, המרחק ביניהן יהיה 150 ק\"מ <b>לפני</b> שהן נפגשות?",
        options: [
            "3 שעות",
            "4 שעות",
            "2.5 שעות",
            "3.5 שעות"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את הזמן שעבר מרגע היציאה ועד לרגע המדובר.", math_expression: "t" },
            { verbal_explanation: "הדרך שעברה רכבת א' בזמן זה.", math_expression: "80t" },
            { verbal_explanation: "הדרך שעברה רכבת ב' באותו הזמן.", math_expression: "70t" },
            { verbal_explanation: "מכיוון שהן טרם נפגשו ויש ביניהן פער, סכום הדרכים שעברו בתוספת הפער שווה למרחק הכולל.", math_expression: "80t + 70t + 150 = 600" },
            { verbal_explanation: "נכנס איברים דומים ונעביר את המספר ימינה.", math_expression: "150t = 450" },
            { verbal_explanation: "נחלק במאה וחמישים ונמצא את הזמן.", math_expression: "t = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question: "הולך רגל א' והולך רגל ב' צועדים זה לקראת זה משני מקומות שהמרחק ביניהם 34 ק\"מ. מהירות הולך א' היא 4 קמ\"ש ומהירות הולך ב' היא 6 קמ\"ש. הולך א' יצא לדרך שעה אחת <b>לפני</b> הולך ב'. כמה שעות לאחר שהולך א' יצא לדרך, הם ייפגשו?",
        options: [
            "4 שעות",
            "3 שעות",
            "5 שעות",
            "4.5 שעות"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את זמן ההליכה של הולך רגל א' כנעלם.", math_expression: "t" },
            { verbal_explanation: "הולך רגל ב' יצא שעה מאוחר יותר, לכן הזמן שלו קטן בשעה.", math_expression: "t - 1" },
            { verbal_explanation: "הדרך שעבר הולך רגל א'.", math_expression: "4t" },
            { verbal_explanation: "הדרך שעבר הולך רגל ב'.", math_expression: "6(t - 1)" },
            { verbal_explanation: "הם נפגשו ולכן סכום הדרכים מכסה את המרחק הכולל.", math_expression: "4t + 6(t - 1) = 34" },
            { verbal_explanation: "נפתח סוגריים ונעביר אגפים.", math_expression: "4t + 6t - 6 = 34 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 10t = 40" },
            { verbal_explanation: "נחלק בעשר לקבלת התשובה.", math_expression: "t = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question: "נהג נוהג ברכבו בין שתי ערים. אם יגדיל את מהירותו הרגילה ב-10 קמ\"ש, יחסוך שעה אחת מזמן הנסיעה. אם יקטין את מהירותו הרגילה ב-10 קמ\"ש, יתארך זמן נסיעתו בשעה וחצי. מצאו את המרחק בין שתי הערים.",
        options: [
            "300 ק\"מ",
            "400 ק\"מ",
            "200 ק\"מ",
            "250 ק\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר מהירות רגילה ומרחק כולל.", math_expression: "v , d" },
            { verbal_explanation: "המשוואה הראשונה על בסיס הנתון הראשון.", math_expression: "d / (v + 10) = d / v - 1" },
            { verbal_explanation: "המשוואה השנייה על בסיס הנתון השני.", math_expression: "d / (v - 10) = d / v + 1.5" },
            { verbal_explanation: "נבודד את המרחק מהמשוואה הראשונה.", math_expression: "d(v + 10) - d &middot; v = v(v + 10) &nbsp;&rArr;&nbsp; 10d = v(v + 10) &nbsp;&rArr;&nbsp; d = 0.1v(v + 10)" },
            { verbal_explanation: "נבודד את המרחק מהמשוואה השנייה באותו אופן.", math_expression: "d &middot; v - d(v - 10) = 1.5v(v - 10) &nbsp;&rArr;&nbsp; 10d = 1.5v(v - 10) &nbsp;&rArr;&nbsp; d = 0.15v(v - 10)" },
            { verbal_explanation: "נשווה בין שני הביטויים של המרחק.", math_expression: "0.1v(v + 10) = 0.15v(v - 10)" },
            { verbal_explanation: "נצמצם את המשתנה המשותף ונפתור את המשוואה הלינארית למציאת המהירות.", math_expression: "v + 10 = 1.5(v - 10) &nbsp;&rArr;&nbsp; v + 10 = 1.5v - 15 &nbsp;&rArr;&nbsp; 25 = 0.5v &nbsp;&rArr;&nbsp; v = 50" },
            { verbal_explanation: "נציב את המהירות באחד הביטויים המבודדים כדי למצוא את המרחק.", math_expression: "d = 0.1 &times; 50(50 + 10) = 5 &times; 60 = 300" }
        ],
        final_answer: "300"
    },

    // =====================================================================
    // תת-נושא 2: בעיות הספק ועבודה (שני פועלים, עבודה בחלקים) (12 שאלות)
    // =====================================================================
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question: "שני פועלים צריכים לסיים עבודה מסוימת. אם הפועל הראשון יעבוד לבדו, יידרשו לו 10 שעות יותר מאשר לפועל השני לבדו. כאשר שניהם עובדים יחד, הם מסיימים את העבודה כולה ב-12 שעות. בכמה שעות מסיים הפועל השני את העבודה לבדו?",
        options: [
            "20 שעות",
            "30 שעות",
            "15 שעות",
            "10 שעות"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את הזמן שלוקח לפועל השני לעשות את העבודה לבדו.", math_expression: "t" },
            { verbal_explanation: "זמן העבודה הנדרש לפועל הראשון ארוך בעשר שעות.", math_expression: "t + 10" },
            { verbal_explanation: "נבנה משוואת הספקים המבוססת על השלמת עבודה אחת שלמה תוך שנים עשר שעות.", math_expression: "12 / t + 12 / (t + 10) = 1" },
            { verbal_explanation: "נכפיל במכנה המשותף.", math_expression: "12(t + 10) + 12t = t(t + 10)" },
            { verbal_explanation: "נפתח סוגריים.", math_expression: "12t + 120 + 12t = t<sup>2</sup> + 10t" },
            { verbal_explanation: "נסדר למשוואה ריבועית.", math_expression: "t<sup>2</sup> - 14t - 120 = 0" },
            { verbal_explanation: "נפתור ונפסול את התוצאה השלילית.", math_expression: "(t - 20)(t + 6) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question: "שני צינורות ממלאים בריכה ריקה תוך 6 שעות כשהם פתוחים יחד. ידוע שאם צינור א' פתוח לבדו, הוא ממלא את הבריכה ב-5 שעות פחות מהזמן שלוקח לצינור ב' למלא אותה לבדו. מצאו בכמה שעות ממלא צינור א' את הבריכה לבדו.",
        options: [
            "10 שעות",
            "15 שעות",
            "12 שעות",
            "8 שעות"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את זמן המילוי של צינור א' לבדו.", math_expression: "t" },
            { verbal_explanation: "זמן המילוי של צינור ב' גדול בחמש.", math_expression: "t + 5" },
            { verbal_explanation: "נרשום משוואת מילוי משותף עבור שש שעות עבודה.", math_expression: "6 / t + 6 / (t + 5) = 1" },
            { verbal_explanation: "נכפיל במכנה המשותף ונסדר.", math_expression: "6(t + 5) + 6t = t(t + 5)" },
            { verbal_explanation: "נפתח סוגריים ונעביר אגפים ליצירת משוואה ריבועית.", math_expression: "12t + 30 = t<sup>2</sup> + 5t &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t<sup>2</sup> - 7t - 30 = 0" },
            { verbal_explanation: "נפתור ונמצא את הזמן החיובי.", math_expression: "(t - 10)(t + 3) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question: "פועל א' יכול לבצע עבודה מסוימת ב-15 ימים. פועל ב' יכול לבצע את אותה העבודה ב-10 ימים. אם שני הפועלים יעבדו יחד, בכמה ימים יסיימו את העבודה כולה?",
        options: [
            "6 ימים",
            "5 ימים",
            "12.5 ימים",
            "8 ימים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הספקו היומי של פועל א'.", math_expression: "1 / 15" },
            { verbal_explanation: "הספקו היומי של פועל ב'.", math_expression: "1 / 10" },
            { verbal_explanation: "הזמן המשותף להשלמת פרויקט מחושב על ידי הכפלת סכום ההספקים בזמן לא ידוע והשוואתו ליחידה שלמה.", math_expression: "t(1 / 15 + 1 / 10) = 1" },
            { verbal_explanation: "נבצע מכנה משותף בתוך הסוגריים ונחבר.", math_expression: "t(2 / 30 + 3 / 30) = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t(5 / 30) = 1" },
            { verbal_explanation: "נצמצם את השבר ונמצא את הזמן.", math_expression: "t(1 / 6) = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question: "כאשר פועל א' ופועל ב' עובדים יחד, הם מסיימים עבודה ב-8 ימים. יום אחד, התחילו לעבוד יחד אך פועל א' עבד רק 6 ימים ופרש. פועל ב' המשיך לעבוד לבדו עוד 3 ימים עד לסיום העבודה (בסך הכל פועל ב' עבד 9 ימים). בכמה ימים מסיים פועל א' את העבודה לבדו?",
        options: [
            "24 ימים",
            "12 ימים",
            "16 ימים",
            "18 ימים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את הספקי שני הפועלים.", math_expression: "P<sub>A</sub> , P<sub>B</sub>" },
            { verbal_explanation: "המשוואה הראשונה מתארת את עבודתם המשותפת.", math_expression: "8 P<sub>A</sub> + 8 P<sub>B</sub> = 1" },
            { verbal_explanation: "המשוואה השנייה מתארת את החלוקה הלא שווה של הימים.", math_expression: "6 P<sub>A</sub> + 9 P<sub>B</sub> = 1" },
            { verbal_explanation: "נכפיל את המשוואה הראשונה בשלוש ואת השנייה בארבע, כדי שנוכל לחסר ביניהן.", math_expression: "24 P<sub>A</sub> + 24 P<sub>B</sub> = 3 &nbsp;&nbsp;|&nbsp;&nbsp; 24 P<sub>A</sub> + 36 P<sub>B</sub> = 4" },
            { verbal_explanation: "חיסור המשוואות נותן לנו את ההספק של פועל ב'.", math_expression: "12 P<sub>B</sub> = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; P<sub>B</sub> = 1 / 12" },
            { verbal_explanation: "נציב את ההספק במשוואה הראשונה למציאת ההספק של א'.", math_expression: "8 P<sub>A</sub> + 8(1 / 12) = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 8 P<sub>A</sub> + 2 / 3 = 1" },
            { verbal_explanation: "נבודד את ההספק של א'.", math_expression: "8 P<sub>A</sub> = 1 / 3 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; P<sub>A</sub> = 1 / 24" },
            { verbal_explanation: "הספק של אחת לחלק לעשרים וארבע משמעותו עשרים וארבעה ימי עבודה.", math_expression: "t = 24" }
        ],
        final_answer: "24"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question: "שני צינורות ממלאים בריכה יחד ב-4 שעות. ביום מסוים פתחו רק את הצינור המהיר עד שמילא חצי בריכה, ואז סגרו אותו ופתחו את הצינור האיטי שמילא את החצי השני. תהליך זה לקח 9 שעות סך הכל. בכמה שעות ממלא הצינור המהיר את הבריכה לבדו?",
        options: [
            "6 שעות",
            "12 שעות",
            "8 שעות",
            "4.5 שעות"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את זמני העבודה של שני הצינורות בנפרד.", math_expression: "t<sub>1</sub> , t<sub>2</sub>" },
            { verbal_explanation: "בניית משוואת ההספקים על בסיס העבודה המשותפת.", math_expression: "4 / t<sub>1</sub> + 4 / t<sub>2</sub> = 1" },
            { verbal_explanation: "הזמן שלקח למלא חצי בריכה שווה למחצית מזמן המילוי הכולל של כל צינור. נרשום את סכום הזמנים.", math_expression: "0.5t<sub>1</sub> + 0.5t<sub>2</sub> = 9 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t<sub>1</sub> + t<sub>2</sub> = 18" },
            { verbal_explanation: "נחלץ את משתנה הזמן השני.", math_expression: "t<sub>2</sub> = 18 - t<sub>1</sub>" },
            { verbal_explanation: "נציב למשוואת ההספקים.", math_expression: "4 / t<sub>1</sub> + 4 / (18 - t<sub>1</sub>) = 1" },
            { verbal_explanation: "נכפיל במכנה המשותף.", math_expression: "4(18 - t<sub>1</sub>) + 4t<sub>1</sub> = t<sub>1</sub>(18 - t<sub>1</sub>)" },
            { verbal_explanation: "נפתח סוגריים ונסדר.", math_expression: "72 - 4t<sub>1</sub> + 4t<sub>1</sub> = 18t<sub>1</sub> - t<sub>1</sub><sup>2</sup> &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t<sub>1</sub><sup>2</sup> - 18t<sub>1</sub> + 72 = 0" },
            { verbal_explanation: "נפתור משוואה. הצינור המהיר הוא בעל הזמן הקצר יותר.", math_expression: "(t<sub>1</sub> - 12)(t<sub>1</sub> - 6) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t<sub>1</sub> = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question: "טרקטור א' חורש חלקה ב-10 שעות. טרקטור ב' חורש את אותה החלקה ב-15 שעות. יום אחד טרקטור א' התחיל לחרוש לבדו למשך שעתיים, ולאחר מכן הצטרף אליו טרקטור ב'. כמה שעות עבד טרקטור ב' עד שהחלקה נחרשה במלואה?",
        options: [
            "4.8 שעות",
            "5 שעות",
            "6.2 שעות",
            "3.5 שעות"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ההספק השעתי של טרקטור א'.", math_expression: "1 / 10" },
            { verbal_explanation: "ההספק השעתי של טרקטור ב'.", math_expression: "1 / 15" },
            { verbal_explanation: "טרקטור א' עבד לבדו שעתיים והשלים חלק מהעבודה.", math_expression: "2 &times; (1 / 10) = 1 / 5" },
            { verbal_explanation: "שארית העבודה שנותרה לאחר השעתיים הללו.", math_expression: "1 - 1 / 5 = 4 / 5" },
            { verbal_explanation: "נחשב את ההספק המשותף שלהם.", math_expression: "1 / 10 + 1 / 15 = 3 / 30 + 2 / 30 = 5 / 30 = 1 / 6" },
            { verbal_explanation: "נחלק את העבודה שנותרה בהספק המשותף כדי לקבל את זמן העבודה המשותף (שהוא גם הזמן שבו טרקטור ב' פעל).", math_expression: "t = (4 / 5) / (1 / 6) = 24 / 5 = 4.8" }
        ],
        final_answer: "4.8"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question: "פועל א' מסיים עבודה ב-20 שעות, ופועל ב' ב-30 שעות. הם התחילו לעבוד יחד, אך לאחר x שעות עזב פועל א'. פועל ב' המשיך לבדו וסיים את שארית העבודה ב-5 שעות. מצאו את x.",
        options: [
            "10 שעות",
            "12 שעות",
            "8 שעות",
            "15 שעות"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרשום את חלקי העבודה שבוצעו על ידי כל פועל.", math_expression: "P<sub>A</sub> = 1 / 20 &nbsp;&nbsp;,&nbsp;&nbsp; P<sub>B</sub> = 1 / 30" },
            { verbal_explanation: "חלק העבודה שביצע פועל א'.", math_expression: "x / 20" },
            { verbal_explanation: "חלק העבודה שביצע פועל ב' (שעות משותפות פלוס שעות בודדות).", math_expression: "(x + 5) / 30" },
            { verbal_explanation: "סכום העבודות שווה לפרויקט שלם אחד.", math_expression: "x / 20 + (x + 5) / 30 = 1" },
            { verbal_explanation: "נכפיל במכנה משותף של שישים.", math_expression: "3x + 2(x + 5) = 60" },
            { verbal_explanation: "נפתור משוואה לינארית פשוטה.", math_expression: "3x + 2x + 10 = 60 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 5x = 50 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question: "שלוש מכונות זהות מפיקות כמות מסוימת של מוצרים ב-8 שעות. כמה שעות יידרשו ל-4 מכונות זהות (באותו ההספק) להפיק את אותה כמות מוצרים בדיוק?",
        options: [
            "6 שעות",
            "10.66 שעות",
            "4 שעות",
            "2 שעות"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב את כמות שעות העבודה הכוללת הדרושה להשלמת הפרויקט (אילו הייתה עובדת מכונה אחת בלבד).", math_expression: "8 &times; 3 = 24" },
            { verbal_explanation: "נחלק את סך העבודה הזה במספר המכונות החדש שעומד לרשותנו.", math_expression: "24 / 4 = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question: "פועל מתחיל יכול לסיים פרויקט ב- x+5 שעות. פועל ותיק עושה זאת ב-x שעות. כשהם עובדים ביחד, הפרויקט מסתיים ב-6 שעות. מצאו את x.",
        options: [
            "10 שעות",
            "15 שעות",
            "12 שעות",
            "8 שעות"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבנה משוואת הספקים המבוססת על עבודה משותפת של שש שעות.", math_expression: "6 / x + 6 / (x + 5) = 1" },
            { verbal_explanation: "נכפיל את שני אגפי המשוואה במכנה המשותף.", math_expression: "6(x + 5) + 6x = x(x + 5)" },
            { verbal_explanation: "נפתח סוגריים ונסדר את המשוואה.", math_expression: "6x + 30 + 6x = x<sup>2</sup> + 5x &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> - 7x - 30 = 0" },
            { verbal_explanation: "נפתור עבור הזמן החיובי.", math_expression: "(x - 10)(x + 3) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question: "פועל א' ופועל ב' ביצעו יחד עבודה ב-10 ימים. ידוע שההספק של פועל א' גדול פי 2 מההספק של פועל ב'. בכמה ימים יכול פועל א' לבצע את העבודה לבדו?",
        options: [
            "15 ימים",
            "30 ימים",
            "20 ימים",
            "12 ימים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את ההספק של פועל ב'.", math_expression: "P" },
            { verbal_explanation: "ההספק של פועל א' כפול ממנו.", math_expression: "2P" },
            { verbal_explanation: "נבנה משוואה על סמך עבודה של עשרה ימים.", math_expression: "10(P + 2P) = 1" },
            { verbal_explanation: "נכנס איברים ונמצא את ההספק.", math_expression: "10(3P) = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 30P = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; P = 1 / 30" },
            { verbal_explanation: "ההספק של פועל א' הוא כפול מזה, ולכן הזמן שנדרש לו הוא ההופכי.", math_expression: "P<sub>A</sub> = 2 / 30 = 1 / 15 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t<sub>A</sub> = 15" }
        ],
        final_answer: "15"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question: "למיכל מחוברים שני צינורות מילוי וצינור ריקון אחד. צינור א' ממלא את המיכל ב-4 שעות, וצינור ב' ב-6 שעות. צינור הריקון מרוקן מיכל מלא ב-12 שעות. אם פותחים את כל הצינורות יחד כשהמיכל ריק, בכמה שעות יתמלא המיכל?",
        options: [
            "3 שעות",
            "4 שעות",
            "2.5 שעות",
            "5 שעות"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרשום את הספקי הצינורות הממלאים (חיוביים) והמרוקן (שלילי).", math_expression: "1 / 4 &nbsp;,&nbsp; 1 / 6 &nbsp;,&nbsp; -1 / 12" },
            { verbal_explanation: "נחשב את ההספק המשותף על ידי חיבור וחיסור השברים.", math_expression: "P = 1 / 4 + 1 / 6 - 1 / 12" },
            { verbal_explanation: "נבצע מכנה משותף שתים עשרה.", math_expression: "P = 3 / 12 + 2 / 12 - 1 / 12 = 4 / 12 = 1 / 3" },
            { verbal_explanation: "קצב המילוי הכולל הוא שליש מיכל בשעה. הפיכת השבר נותנת את הזמן הנדרש למילוי שלם.", math_expression: "t = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question: "פועל א' יכול לסיים פרויקט לבדו ב-12 ימים. פועל א' ופועל ב' עבדו יחד במשך 4 ימים וביצעו בדיוק 50% מהפרויקט. בכמה ימים יכול פועל ב' לסיים את כל הפרויקט לבדו?",
        options: [
            "24 ימים",
            "16 ימים",
            "20 ימים",
            "12 ימים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ההספק היומי של פועל א'.", math_expression: "P<sub>A</sub> = 1 / 12" },
            { verbal_explanation: "חלק העבודה שביצע פועל א' בארבעה ימים.", math_expression: "4 &times; (1 / 12) = 1 / 3" },
            { verbal_explanation: "העבודה שנותרה לפועל ב' לעשות כדי להשלים חמישים אחוזים.", math_expression: "Work<sub>B</sub> = 1 / 2 - 1 / 3 = 3 / 6 - 2 / 6 = 1 / 6" },
            { verbal_explanation: "פועל ב' ביצע שישית מהעבודה בארבעה ימים. נחשב את ההספק היומי שלו.", math_expression: "P<sub>B</sub> = (1 / 6) / 4 = 1 / 24" },
            { verbal_explanation: "מכאן שנדרשים לו עשרים וארבעה ימים להשלים את הפרויקט לבדו.", math_expression: "t = 24" }
        ],
        final_answer: "24"
    },

    // =====================================================================
    // תת-נושא 3: בעיות קנייה ומכירה (כולל אחוזים) (12 שאלות)
    // =====================================================================
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question: "סוחר קנה מספר מסוים של מוצרים ושילם עליהם 1200 שקלים. 5 מהמוצרים נפגמו ונזרקו. את שאר המוצרים מכר הסוחר במחיר הגבוה ב-20 שקלים מהמחיר שבו קנה כל מוצר. בסך הכל הרוויח הסוחר בעסקה 300 שקלים. כמה מוצרים קנה הסוחר בתחילה?",
        options: [
            "30",
            "25",
            "20",
            "40"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את הכמות הראשונית שנקנתה.", math_expression: "x" },
            { verbal_explanation: "מחיר הקנייה המקורי של מוצר בודד.", math_expression: "1200 / x" },
            { verbal_explanation: "הרווח עמד על שלוש מאות, לכן סך ההכנסות שוות לאלף וחמש מאות.", math_expression: "Revenue = 1500" },
            { verbal_explanation: "נרכיב משוואה המכפילה את הכמות התקינה במחיר המכירה החדש.", math_expression: "(x - 5)(1200 / x + 20) = 1500" },
            { verbal_explanation: "נפתח סוגריים.", math_expression: "1200 + 20x - 6000 / x - 100 = 1500" },
            { verbal_explanation: "נסדר ונעביר למשוואה ריבועית.", math_expression: "20x - 6000 / x - 400 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 20x<sup>2</sup> - 400x - 6000 = 0" },
            { verbal_explanation: "נחלק בעשרים ונקבל תבנית נוחה לפירוק.", math_expression: "x<sup>2</sup> - 20x - 300 = 0" },
            { verbal_explanation: "נפרק לטרינום ונבחר בשורש החיובי וההגיוני לכמות.", math_expression: "(x - 30)(x + 10) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 30" }
        ],
        final_answer: "30"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question: "בעל חנות קנה עטים ושילם תמורתם 600 שקלים בסך הכל. לאחר זמן מה מחיר עט ירד ב-5 שקלים, והוא הצליח לקנות 10 עטים נוספים באותו הסכום הכולל (600 שקלים). מה היה המחיר המקורי של עט בודד?",
        options: [
            "20 שקלים",
            "25 שקלים",
            "15 שקלים",
            "30 שקלים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את המחיר המקורי של עט בודד כנעלם.", math_expression: "p" },
            { verbal_explanation: "כמות העטים שניתן היה לקנות במחיר המקורי.", math_expression: "600 / p" },
            { verbal_explanation: "כמות העטים שניתן לקנות במחיר המוזל.", math_expression: "600 / (p - 5)" },
            { verbal_explanation: "הכמות החדשה גדולה בעשר מהכמות הישנה.", math_expression: "600 / (p - 5) = 600 / p + 10" },
            { verbal_explanation: "נחלק בעשר ונכפיל במכנה המשותף.", math_expression: "60 / (p - 5) = 60 / p + 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 60p = 60(p - 5) + p(p - 5)" },
            { verbal_explanation: "נפתח סוגריים.", math_expression: "60p = 60p - 300 + p<sup>2</sup> - 5p" },
            { verbal_explanation: "נסדר למשוואה ריבועית שווה לאפס ונפתור.", math_expression: "p<sup>2</sup> - 5p - 300 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (p - 20)(p + 15) = 0" },
            { verbal_explanation: "מחיר חייב להיות חיובי.", math_expression: "p = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question: "מחיר מוצר א' הוא 50 שקלים ומחיר מוצר ב' הוא 80 שקלים. לקוח קנה בסך הכל 20 מוצרים משני הסוגים יחד, ושילם עבורם 1240 שקלים. כמה מוצרים מסוג א' הוא קנה?",
        options: [
            "12",
            "8",
            "10",
            "14"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את כמות מוצרי א'.", math_expression: "x" },
            { verbal_explanation: "כמות מוצרי ב' היא ההשלמה לעשרים.", math_expression: "20 - x" },
            { verbal_explanation: "סכום התשלום מורכב מכמות כפול מחיר.", math_expression: "50x + 80(20 - x) = 1240" },
            { verbal_explanation: "נפתח סוגריים ונסדר.", math_expression: "50x + 1600 - 80x = 1240" },
            { verbal_explanation: "נכנס איברים ונעביר מספרים.", math_expression: "-30x = -360" },
            { verbal_explanation: "נחלץ את המשתנה הרצוי.", math_expression: "x = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question: "בעל חנות רהיטים קנה כיסאות ב-2000 שקלים בסך הכל. 5 מהכיסאות נשברו, ואת השאר הוא מכר ברווח של 25% <b>על כל כיסא</b>. סך הפדיון (הכנסה) שלו מהמכירה כיסה בדיוק את ההוצאה ההתחלתית (2000 שקלים). כמה כיסאות הוא קנה במקור?",
        options: [
            "25",
            "20",
            "30",
            "15"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את כמות הכיסאות שנקנתה.", math_expression: "x" },
            { verbal_explanation: "עלות של כיסא אחד.", math_expression: "2000 / x" },
            { verbal_explanation: "מחיר המכירה מגלם רווח של עשרים וחמישה אחוזים על העלות.", math_expression: "1.25 &times; (2000 / x) = 2500 / x" },
            { verbal_explanation: "נרכיב משוואה של כמות נמכרת כפול מחיר מכירה שווה לפדיון.", math_expression: "(x - 5) &times; (2500 / x) = 2000" },
            { verbal_explanation: "נפתח סוגריים ונכפיל במשתנה.", math_expression: "2500 - 12500 / x = 2000 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 500 = 12500 / x" },
            { verbal_explanation: "נחלץ את הכמות.", math_expression: "500x = 12500 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 25" }
        ],
        final_answer: "25"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question: "מחירו של בגד היה 120 שקלים. תחילה עלה מחירו ב- x%. לאחר מכן, ירד המחיר החדש באותו אחוז (x%). לאחר שתי הפעולות, מחיר הבגד נקבע על 115.2 שקלים. מצאו את x.",
        options: [
            "20",
            "15",
            "10",
            "25"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרכיב משוואה עם גורמי הגידול והדעיכה באחוזים.", math_expression: "120 &times; (1 + x / 100) &times; (1 - x / 100) = 115.2" },
            { verbal_explanation: "נשתמש בנוסחת הפרש ריבועים לתוך הסוגריים.", math_expression: "120(1 - x<sup>2</sup> / 10000) = 115.2" },
            { verbal_explanation: "נחלק במאה ועשרים.", math_expression: "1 - x<sup>2</sup> / 10000 = 0.96" },
            { verbal_explanation: "נעביר אגפים להשלמת הפתרון.", math_expression: "x<sup>2</sup> / 10000 = 0.04 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = 400" },
            { verbal_explanation: "שורש למספר חיובי.", math_expression: "x = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question: "סוחר קנה כרטיסים להופעה ב-1500 שקלים. 10 כרטיסים הוא מכר באותו מחיר שעלו לו. את שאר הכרטיסים הוא מכר ברווח של 20 שקלים לכל כרטיס. בסוף המכירה, הסוחר הרוויח 100 שקלים סך הכל. כמה כרטיסים הוא קנה?",
        options: [
            "15",
            "20",
            "25",
            "30"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את הכמות הכוללת של הכרטיסים.", math_expression: "x" },
            { verbal_explanation: "הרווח הופק אך ורק מהכרטיסים שנמכרו ביוקר. כמותם היא הכמות הכוללת פחות העשרה שנמכרו במחיר עלות.", math_expression: "x - 10" },
            { verbal_explanation: "נכפיל כמות זו ברווח ליחידה ונשווה לרווח הכולל.", math_expression: "20(x - 10) = 100" },
            { verbal_explanation: "נחלק בעשרים ונקבל את הכמות.", math_expression: "x - 10 = 5 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 15" }
        ],
        final_answer: "15"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question: "מחירו של מוצר ירד תחילה ב-20%. כעבור חודש, מחירו החדש של המוצר ירד בעוד 30%. לאחר שתי ההוזלות, המחיר הסופי היה 56 שקלים. מה היה מחירו המקורי של המוצר?",
        options: [
            "100 שקלים",
            "120 שקלים",
            "80 שקלים",
            "112 שקלים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את המחיר המקורי.", math_expression: "p" },
            { verbal_explanation: "ירידה של עשרים אחוזים מותירה שמונים אחוזים. ירידה של שלושים אחוזים לאחר מכן מותירה שבעים אחוזים.", math_expression: "p &times; 0.80 &times; 0.70 = 56" },
            { verbal_explanation: "נכפיל את המקדמים.", math_expression: "0.56p = 56" },
            { verbal_explanation: "נחלק באפס נקודה חמישים ושש לקבלת המחיר המקורי השלם.", math_expression: "p = 100" }
        ],
        final_answer: "100"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question: "חקלאי קנה כמות מסוימת של תפוחים ושילם 300 שקלים. 10 ק\"ג מהתפוחים נרקבו. את שאר התפוחים הוא מכר ברווח של 3 שקלים לקילוגרם מעל מחיר הקנייה. הרווח הכולל שלו בעסקה היה 60 שקלים. כמה ק\"ג תפוחים קנה החקלאי?",
        options: [
            "50 ק\"ג",
            "40 ק\"ג",
            "60 ק\"ג",
            "30 ק\"ג"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את כמות הקילוגרמים שנקנתה.", math_expression: "x" },
            { verbal_explanation: "עלות של קילוגרם בודד.", math_expression: "300 / x" },
            { verbal_explanation: "ההכנסה שווה להוצאה המקורית בתוספת הרווח הכולל.", math_expression: "Revenue = 360" },
            { verbal_explanation: "נרכיב משוואת מכירה.", math_expression: "(x - 10)(300 / x + 3) = 360" },
            { verbal_explanation: "נפתח סוגריים ונסדר.", math_expression: "300 + 3x - 3000 / x - 30 = 360" },
            { verbal_explanation: "נכנס איברים וניצור משוואה ריבועית.", math_expression: "3x - 3000 / x - 90 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 3x<sup>2</sup> - 90x - 3000 = 0" },
            { verbal_explanation: "נחלק בשלוש לפתרון נוח יותר.", math_expression: "x<sup>2</sup> - 30x - 1000 = 0" },
            { verbal_explanation: "נפרק לטרינום ונבחר בתוצאה החיובית.", math_expression: "(x - 50)(x + 20) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 50" }
        ],
        final_answer: "50"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question: "משקיע קנה סחורה ב-4000 שקלים. 20% מהסחורה הוא מכר בהפסד של 10%. את שאר הסחורה הוא מכר ברווח של 30%. מהי ההכנסה הכוללת שלו (פדיון) בתום המכירה?",
        options: [
            "4880 שקלים",
            "4500 שקלים",
            "5200 שקלים",
            "4800 שקלים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב את עלות החלק הראשון המהווה עשרים אחוז.", math_expression: "0.20 &times; 4000 = 800" },
            { verbal_explanation: "נחשב את עלות החלק השני המהווה שמונים אחוז.", math_expression: "0.80 &times; 4000 = 3200" },
            { verbal_explanation: "הכנסות מן החלק הראשון (הפסד של עשרה אחוזים).", math_expression: "800 &times; 0.90 = 720" },
            { verbal_explanation: "הכנסות מן החלק השני (רווח של שלושים אחוזים).", math_expression: "3200 &times; 1.30 = 4160" },
            { verbal_explanation: "סך ההכנסות המצטבר.", math_expression: "720 + 4160 = 4880" }
        ],
        final_answer: "4880"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question: "סוחר קנה x מוצרים. חצי מהמוצרים הוא מכר ברווח של 40 שקלים על כל מוצר. את החצי השני של המוצרים הוא מכר בהפסד של 10 שקלים על כל מוצר. סך כל הרווח של הסוחר עמד על 750 שקלים. מצאו את כמות המוצרים שקנה.",
        options: [
            "50",
            "60",
            "40",
            "30"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרכיב משוואת רווחים ישירה על בסיס הכמויות והרווח ליחידה.", math_expression: "(x / 2) &times; 40 + (x / 2) &times; (-10) = 750" },
            { verbal_explanation: "נכפיל ונצמצם את השברים.", math_expression: "20x - 5x = 750" },
            { verbal_explanation: "נחסר ונחלק בחמש עשרה כדי למצוא את סך כל המוצרים.", math_expression: "15x = 750 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 50" }
        ],
        final_answer: "50"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question: "העלות הכוללת של שני מוצרים, א' ו-ב', היא 500 שקלים. מחירו של מוצר א' עלה ב-20%, ואילו מחירו של מוצר ב' ירד ב-10%. לאחר השינויים, העלות הכוללת עמדה על 540 שקלים. מה הייתה עלותו המקורית של מוצר א'?",
        options: [
            "300 שקלים",
            "200 שקלים",
            "250 שקלים",
            "350 שקלים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את עלות מוצר א' כנעלם ראשי.", math_expression: "A" },
            { verbal_explanation: "נבטא את עלות מוצר ב' באמצעות העלות הכוללת.", math_expression: "B = 500 - A" },
            { verbal_explanation: "נבנה משוואה על פי התייקרויות והוזלות באחוזים.", math_expression: "1.20A + 0.90(500 - A) = 540" },
            { verbal_explanation: "נפתח סוגריים ונסדר.", math_expression: "1.20A + 450 - 0.90A = 540" },
            { verbal_explanation: "נכנס איברים ונעביר מספרים.", math_expression: "0.30A = 90" },
            { verbal_explanation: "נחלק באפס נקודה שלושים.", math_expression: "A = 300" }
        ],
        final_answer: "300"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question: "חברה קנתה מחשבים ניידים ב-10000 שקלים בסך הכל. ספק המחשבים הסכים להוריד את מחיר כל מחשב ב-500 שקלים, מה שאפשר לחברה לקנות מחשב אחד נוסף באותו סכום כולל. מה היה מחירו המקורי של מחשב נייד בודד?",
        options: [
            "2500 שקלים",
            "2000 שקלים",
            "5000 שקלים",
            "1000 שקלים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הכמות המקורית של המחשבים שנקנתה.", math_expression: "x" },
            { verbal_explanation: "נבטא את מחיר המחשב החדש על בסיס הפחתה של חמש מאות שקלים מהמחיר המקורי, ונשווה למחיר החדש המבוסס על הגדלת הכמות.", math_expression: "10000 / x - 500 = 10000 / (x + 1)" },
            { verbal_explanation: "נחלק את המשוואה כולה בחמש מאות.", math_expression: "20 / x - 1 = 20 / (x + 1)" },
            { verbal_explanation: "נכפיל במכנה משותף ונפתח סוגריים.", math_expression: "20(x + 1) - x(x + 1) = 20x &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 20x + 20 - x<sup>2</sup> - x = 20x" },
            { verbal_explanation: "נסדר למשוואה ריבועית.", math_expression: "x<sup>2</sup> + x - 20 = 0" },
            { verbal_explanation: "נפרק לטרינום. כמות פריטים חיובית נבחרת.", math_expression: "(x + 5)(x - 4) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 4" },
            { verbal_explanation: "כדי למצוא את המחיר המקורי, נחלק את הסכום הכולל בכמות שמצאנו.", math_expression: "P = 10000 / 4 = 2500" }
        ],
        final_answer: "2500"
    },// =====================================================================
    // תת-נושא 4: בעיות תערובות וריכוזים (12 שאלות)
    // =====================================================================
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תערובות וריכוזים",
        question: "בחבית יש 20 ליטרים של כוהל בריכוז 40%. כמה ליטרים של מים טהורים (ריכוז 0%) יש להוסיף לחבית כדי שהריכוז החדש של התמיסה ירד ל-25%?",
        options: [
            "12 ליטרים",
            "15 ליטרים",
            "10 ליטרים",
            "8 ליטרים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את כמות המים הטהורים שיש להוסיף לחבית.", math_expression: "x" },
            { verbal_explanation: "נחשב את כמות הכוהל הנקי שיש בתמיסה המקורית (כמות כפול ריכוז).", math_expression: "20 &times; 0.40 = 8" },
            { verbal_explanation: "כמות התמיסה הכוללת החדשה, לאחר הוספת המים.", math_expression: "20 + x" },
            { verbal_explanation: "כמות הכוהל הנקי בתמיסה החדשה לא השתנתה, מכיוון שהוספנו רק מים (0% כוהל). נרשום את משוואת הריכוז החדש (כמות חומר נקי חלקי כמות תמיסה כוללת).", math_expression: "8 / (20 + x) = 0.25" },
            { verbal_explanation: "נכפיל במכנה המשותף כדי לפתור את המשוואה.", math_expression: "8 = 0.25(20 + x)" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "8 = 5 + 0.25x" },
            { verbal_explanation: "נעביר את המספר אגף.", math_expression: "3 = 0.25x" },
            { verbal_explanation: "נחלק באפס נקודה עשרים וחמש (שזה שקול להכפלה בארבע) כדי למצוא את כמות המים.", math_expression: "x = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תערובות וריכוזים",
        question: "בכלי א' יש תמיסת מלח בריכוז 10%. בכלי ב' יש תמיסת מלח בריכוז 30%. ערבבו כמות מסוימת מכלי א' עם כמות הכפולה ממנה מכלי ב', וקיבלו תערובת חדשה שמשקלה הכולל 60 ק\"ג. מהו ריכוז המלח בתערובת החדשה (באחוזים)?",
        options: [
            "23.33%",
            "20%",
            "15%",
            "25%"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את משקל התמיסה שנלקחה מכלי א'.", math_expression: "m" },
            { verbal_explanation: "משקל התמיסה שנלקחה מכלי ב' כפול ממשקל התמיסה מכלי א'.", math_expression: "2m" },
            { verbal_explanation: "סכום המשקלים של שתי התמיסות יחד מרכיב את התערובת החדשה, ששוקלת שישים קילוגרמים. נבנה משוואה למציאת המשקלים.", math_expression: "m + 2m = 60 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 3m = 60 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; m = 20" },
            { verbal_explanation: "מכאן שמכלי א' נלקחו עשרים קילוגרמים, ומכלי ב' נלקחו ארבעים קילוגרמים.", math_expression: "20 , 40" },
            { verbal_explanation: "נחשב את משקל המלח הנקי שהגיע מכלי א'.", math_expression: "20 &times; 0.10 = 2" },
            { verbal_explanation: "נחשב את משקל המלח הנקי שהגיע מכלי ב'.", math_expression: "40 &times; 0.30 = 12" },
            { verbal_explanation: "נחשב את משקל המלח הכולל בתערובת החדשה.", math_expression: "2 + 12 = 14" },
            { verbal_explanation: "נחשב את ריכוז המלח בתערובת החדשה (כמות חומר נקי לחלק לכמות כוללת).", math_expression: "14 / 60" },
            { verbal_explanation: "נמיר את השבר העשרוני לאחוזים על ידי הכפלה במאה.", math_expression: "(14 / 60) &times; 100 = 23.333" }
        ],
        final_answer: "23.33%"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תערובות וריכוזים",
        question: "סגסוגת א' מכילה נחושת ואבץ ביחס של 2:3 (לטובת האבץ). סגסוגת ב' מכילה נחושת ואבץ ביחס של 1:4 (לטובת האבץ). לקחו 20 ק\"ג מסגסוגת א' ו-30 ק\"ג מסגסוגת ב', והתיכו אותם יחד לסגסוגת חדשה. מהו משקל הנחושת בסגסוגת החדשה שנוצרה?",
        options: [
            "14 ק\"ג",
            "12 ק\"ג",
            "15 ק\"ג",
            "10 ק\"ג"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "בסגסוגת א', היחס הוא שתיים לשלוש, ולכן הנחושת מהווה שתי חמישיות מהמשקל הכולל.", math_expression: "2 / (2 + 3) = 2 / 5" },
            { verbal_explanation: "נחשב את כמות הנחושת שיש בעשרים קילוגרמים של סגסוגת א'.", math_expression: "20 &times; (2 / 5) = 8" },
            { verbal_explanation: "בסגסוגת ב', היחס הוא אחת לארבע, ולכן הנחושת מהווה חמישית מהמשקל הכולל.", math_expression: "1 / (1 + 4) = 1 / 5" },
            { verbal_explanation: "נחשב את כמות הנחושת שיש בשלושים קילוגרמים של סגסוגת ב'.", math_expression: "30 &times; (1 / 5) = 6" },
            { verbal_explanation: "הסגסוגת החדשה מורכבת משתי הסגסוגות הקודמות. נחבר את כמויות הנחושת משתיהן כדי למצוא את משקל הנחושת הכולל.", math_expression: "8 + 6 = 14" }
        ],
        final_answer: "14"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תערובות וריכוזים",
        question: "מתמיסת סוכר שמשקלה 50 ק\"ג וריכוזה 12%, אידו כמות מסוימת של מים (מים בלבד, ללא סוכר), כך שריכוז התמיסה עלה ל-15%. כמה ק\"ג של מים התאדו?",
        options: [
            "10 ק\"ג",
            "8 ק\"ג",
            "5 ק\"ג",
            "12 ק\"ג"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את כמות המים שהתאדתה (בירידה).", math_expression: "x" },
            { verbal_explanation: "נחשב את כמות הסוכר הטהור בתמיסה המקורית (כמות כפול ריכוז).", math_expression: "50 &times; 0.12 = 6" },
            { verbal_explanation: "במהלך האידוי, רק מים עוזבים את התמיסה, ולכן משקל הסוכר נותר ללא שינוי. המשקל הכולל של התמיסה ירד.", math_expression: "50 - x" },
            { verbal_explanation: "נרשום את משוואת הריכוז עבור התמיסה החדשה: כמות הסוכר לחלק למשקל הכולל החדש שווה לריכוז החדש.", math_expression: "6 / (50 - x) = 0.15" },
            { verbal_explanation: "נכפיל את שני אגפי המשוואה במכנה.", math_expression: "6 = 0.15(50 - x)" },
            { verbal_explanation: "נפתח את הסוגריים על ידי חלוקה ופילוג.", math_expression: "6 = 7.5 - 0.15x" },
            { verbal_explanation: "נעביר אגפים ונבודד את המשתנה x.", math_expression: "0.15x = 1.5" },
            { verbal_explanation: "נחלק באפס נקודה חמש-עשרה כדי לקבל את משקל המים שהתאדו.", math_expression: "x = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תערובות וריכוזים",
        question: "בכלי היו 30 ליטר כוהל נקי (100%). הוציאו מהכלי x ליטרים של כוהל והכניסו במקומם x ליטרים של מים. לאחר מכן, שוב הוציאו מהתערובת שנוצרה x ליטרים והכניסו במקומם x ליטרים של מים. כעת, ריכוז הכוהל בתערובת הוא 64%. מצאו את כמות הליטרים שהוצאה בכל פעם (x).",
        options: [
            "6 ליטרים",
            "10 ליטרים",
            "5 ליטרים",
            "8 ליטרים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב את ריכוז הכוהל בכלי לאחר הפעולה הראשונה. כמות הכוהל שנותרה היא שלושים פחות איקס, מתוך סך כולל של שלושים ליטרים (כי הוחזר אותו נפח במים).", math_expression: "(30 - x) / 30" },
            { verbal_explanation: "בפעולה השנייה, מוציאים שוב כמות של x ליטרים מהתערובת. אולם, הפעם ה-x ליטרים אינם כוהל נקי, אלא מכילים כוהל לפי הריכוז שחושב בשלב הקודם. לכן, כמות הכוהל שהוצאה הפעם היא:", math_expression: "x &times; ((30 - x) / 30)" },
            { verbal_explanation: "כמות הכוהל הכוללת שנותרה בכלי לאחר שתי הפעולות היא הכמות שהייתה לאחר הפעולה הראשונה, פחות הכמות שהוצאה בפעולה השנייה.", math_expression: "(30 - x) - x &times; ((30 - x) / 30)" },
            { verbal_explanation: "נוציא את הביטוי (30 פחות איקס) כגורם משותף.", math_expression: "(30 - x) &times; (1 - x / 30)" },
            { verbal_explanation: "נבצע מכנה משותף בתוך הסוגריים השניים.", math_expression: "(30 - x) &times; ((30 - x) / 30) = (30 - x)<sup>2</sup> / 30" },
            { verbal_explanation: "נתון לנו שהריכוז הסופי הוא שישים וארבעה אחוזים. כמות הכוהל הסופית שווה לריכוז כפול הנפח הכולל של הכלי (שנשאר שלושים).", math_expression: "(30 - x)<sup>2</sup> / 30 = 0.64 &times; 30" },
            { verbal_explanation: "נחשב את אגף ימין ונכפיל בשלושים את המשוואה.", math_expression: "(30 - x)<sup>2</sup> / 30 = 19.2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (30 - x)<sup>2</sup> = 576" },
            { verbal_explanation: "נוציא שורש ריבועי. מכיוון שכמות ההוצאה קטנה מהנפח הכולל, נתייחס רק לתוצאה החיובית ההגיונית.", math_expression: "30 - x = 24 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תערובות וריכוזים",
        question: "תמיסה א' שוקלת 40 ק\"ג וריכוזה 20%. תמיסה ב' שוקלת 60 ק\"ג וריכוזה 50%. מערבבים את שתי התמיסות. מה יהיה הריכוז של התערובת החדשה (באחוזים)?",
        options: [
            "38%",
            "35%",
            "40%",
            "32%"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב את כמות החומר הפעיל בתמיסה הראשונה.", math_expression: "40 &times; 0.20 = 8" },
            { verbal_explanation: "נחשב את כמות החומר הפעיל בתמיסה השנייה.", math_expression: "60 &times; 0.50 = 30" },
            { verbal_explanation: "הכמות הכוללת של החומר הפעיל בשתי התמיסות יחד.", math_expression: "8 + 30 = 38" },
            { verbal_explanation: "המשקל הכולל של התערובת החדשה לאחר הערבוב.", math_expression: "40 + 60 = 100" },
            { verbal_explanation: "נחשב את הריכוז החדש (כמות חומר פעיל לחלק למשקל כולל) ונמיר לאחוזים.", math_expression: "38 / 100 = 0.38" }
        ],
        final_answer: "38%"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תערובות וריכוזים",
        question: "לחבית המכילה 10 ק\"ג של מלח טהור (100% מלח), הוסיפו x ק\"ג של תמיסת מלח בריכוז 20%. הריכוז של התערובת שנוצרה בחבית הוא כעת 40%. מצאו את x (כמות התמיסה שהוספה).",
        options: [
            "30 ק\"ג",
            "20 ק\"ג",
            "40 ק\"ג",
            "10 ק\"ג"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את משקל התמיסה שהוספה לחבית.", math_expression: "x" },
            { verbal_explanation: "נחשב את כמות המלח הנקי שנכנסה לחבית יחד עם התמיסה שהוספה.", math_expression: "0.20x" },
            { verbal_explanation: "בתוך החבית היו כבר 10 קילוגרמים של מלח טהור. נחבר את כמות המלח הכוללת כעת.", math_expression: "10 + 0.20x" },
            { verbal_explanation: "המשקל הכולל של כל החומרים בחבית כעת.", math_expression: "10 + x" },
            { verbal_explanation: "הריכוז החדש נתון כארבעים אחוזים. נבנה משוואת ריכוז.", math_expression: "(10 + 0.20x) / (10 + x) = 0.40" },
            { verbal_explanation: "נכפיל את שני אגפי המשוואה במכנה של השבר.", math_expression: "10 + 0.20x = 0.40(10 + x)" },
            { verbal_explanation: "נפתח סוגריים ונסדר את האיברים.", math_expression: "10 + 0.20x = 4 + 0.40x" },
            { verbal_explanation: "נעביר אגפים ונבודד את המשתנה x.", math_expression: "6 = 0.20x" },
            { verbal_explanation: "נחלק באפס נקודה עשרים (או נכפיל בחמש) ונקבל את הכמות המבוקשת.", math_expression: "x = 30" }
        ],
        final_answer: "30"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תערובות וריכוזים",
        question: "צבעי מערבב 2 פחיות של צבע כחול עם 3 פחיות של צבע צהוב כדי ליצור צבע ירוק. ידוע כי הצבע הכחול מכיל 10% מים, והצבע הצהוב מכיל 15% מים. כל הפחיות זהות בגודלן ובמשקלן. מהו אחוז המים בתערובת הירוקה שנוצרה?",
        options: [
            "13%",
            "12.5%",
            "12%",
            "14%"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הפחיות זהות במשקלן, לכן נגדיר את משקל פחית אחת כיחידה שלמה (1).", math_expression: "W = 1" },
            { verbal_explanation: "נחשב את כמות המים הכוללת שמגיעה משתי הפחיות של הצבע הכחול.", math_expression: "2 &times; 0.10 = 0.20" },
            { verbal_explanation: "נחשב את כמות המים הכוללת שמגיעה משלוש הפחיות של הצבע הצהוב.", math_expression: "3 &times; 0.15 = 0.45" },
            { verbal_explanation: "כמות המים הכוללת בתערובת החדשה.", math_expression: "0.20 + 0.45 = 0.65" },
            { verbal_explanation: "סך כל הפחיות שבתערובת (המשקל הכולל).", math_expression: "2 + 3 = 5" },
            { verbal_explanation: "אחוז המים בתערובת מחושב על ידי חלוקת כמות המים במשקל הכולל, והכפלה במאה.", math_expression: "(0.65 / 5) &times; 100 = 0.13 &times; 100 = 13" }
        ],
        final_answer: "13%"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תערובות וריכוזים",
        question: "מתמיסה המכילה אלכוהול ומים אידו 15 ק\"ג מים (בלבד), וכתוצאה מכך ריכוז האלכוהול עלה מ-30% ל-45%. מה היה משקלה ההתחלתי של התמיסה כולה לפני האידוי?",
        options: [
            "45 ק\"ג",
            "60 ק\"ג",
            "50 ק\"ג",
            "40 ק\"ג"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את משקל התמיסה ההתחלתי במלואו כנעלם.", math_expression: "m" },
            { verbal_explanation: "נחשב את כמות האלכוהול הנקי בתמיסה המקורית. הכמות הזו נשארת קבועה לאורך כל תהליך האידוי מכיוון שרק המים מתאדים.", math_expression: "0.30m" },
            { verbal_explanation: "משקל התמיסה הכולל לאחר אידוי חמישה עשר קילוגרמים של מים.", math_expression: "m - 15" },
            { verbal_explanation: "הריכוז החדש של התמיסה הוא ארבעים וחמישה אחוזים. נבנה משוואה המקשרת בין האלכוהול למשקל החדש.", math_expression: "0.30m / (m - 15) = 0.45" },
            { verbal_explanation: "נכפיל את שני אגפי המשוואה במכנה של השבר.", math_expression: "0.30m = 0.45(m - 15)" },
            { verbal_explanation: "נפתח סוגריים ונקבל משוואה פשוטה.", math_expression: "0.30m = 0.45m - 6.75" },
            { verbal_explanation: "נעביר את המשתנה לאגף אחד ואת המספרים לאחר.", math_expression: "6.75 = 0.15m" },
            { verbal_explanation: "נחלק באפס נקודה חמש עשרה כדי למצוא את המשקל ההתחלתי של התמיסה כולה.", math_expression: "m = 6.75 / 0.15 = 45" }
        ],
        final_answer: "45"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תערובות וריכוזים",
        question: "כמה גרם של מלח טהור יש להוסיף ל-400 גרם של תמיסת מלח בריכוז 5%, כדי שהריכוז החדש יעלה ל-24%?",
        options: [
            "100 גרם",
            "80 גרם",
            "120 גרם",
            "90 גרם"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את כמות המלח הטהור שנוסיף לתמיסה כנעלם.", math_expression: "x" },
            { verbal_explanation: "נחשב את כמות המלח שכבר קיימת בתמיסה המקורית (חמישה אחוזים מתוך ארבע מאות גרם).", math_expression: "400 &times; 0.05 = 20" },
            { verbal_explanation: "כמות המלח הכוללת בתמיסה החדשה תהיה מורכבת מהמלח המקורי בתוספת המלח החדש.", math_expression: "20 + x" },
            { verbal_explanation: "המשקל הכולל של התמיסה כולה יגדל גם הוא באותו משקל בדיוק (משום שהוספנו חומר).", math_expression: "400 + x" },
            { verbal_explanation: "הריכוז החדש שנוצר נתון, ולכן נוכל לבנות משוואה מתאימה.", math_expression: "(20 + x) / (400 + x) = 0.24" },
            { verbal_explanation: "נכפיל את המשוואה במכנה של השבר.", math_expression: "20 + x = 0.24(400 + x)" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "20 + x = 96 + 0.24x" },
            { verbal_explanation: "נעביר את המשתנים לאגף השמאלי ואת המספרים לימני ונחסר.", math_expression: "0.76x = 76" },
            { verbal_explanation: "נחלק באפס נקודה שבעים ושש לקבלת כמות המלח המדויקת שצריך להוסיף.", math_expression: "x = 100" }
        ],
        final_answer: "100"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תערובות וריכוזים",
        question: "בכלי א' יש תמיסת סוכר בריכוז 20%. בכלי ב' יש תמיסת סוכר בריכוז p%. כאשר מערבבים כמויות שוות משני הכלים, מתקבלת תמיסה בריכוז 35%. מהו ריכוז הסוכר בכלי ב' (p)?",
        options: [
            "50%",
            "45%",
            "40%",
            "55%"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מכיוון שמערבבים כמויות שוות משני הכלים, נוכל להגדיר את הכמות של כל כלי כמשתנה כלשהו, למשל יחידת משקל אחת.", math_expression: "m = 1" },
            { verbal_explanation: "כמות הסוכר המגיעה מהכלי הראשון היא המשקל כפול הריכוז שלו.", math_expression: "1 &times; 0.20 = 0.20" },
            { verbal_explanation: "כמות הסוכר המגיעה מהכלי השני תלויה בריכוז הנעלם שלו.", math_expression: "1 &times; (p / 100)" },
            { verbal_explanation: "המשקל הכולל של התערובת החדשה הוא סכום המשקלים של שתי התמיסות הזהות בכמותן.", math_expression: "1 + 1 = 2" },
            { verbal_explanation: "ריכוז התערובת החדשה נתון לנו, נרכיב משוואה.", math_expression: "(0.20 + p / 100) / 2 = 0.35" },
            { verbal_explanation: "נכפיל את שני אגפי המשוואה בשתיים.", math_expression: "0.20 + p / 100 = 0.70" },
            { verbal_explanation: "נעביר את המספר מאגף שמאל לאגף ימין.", math_expression: "p / 100 = 0.50" },
            { verbal_explanation: "נכפיל במאה כדי לבודד את המשתנה p ולמצוא את אחוז הריכוז.", math_expression: "p = 50" }
        ],
        final_answer: "50"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות תערובות וריכוזים",
        question: "בכלי יש כמות מסוימת של תמיסת חומצה בריכוז 10%. מוסיפים לכלי 20 ליטר של חומצה טהורה (100%), והריכוז החדש קופץ ל-40%. מה הייתה כמות התמיסה ההתחלתית בכלי?",
        options: [
            "40 ליטרים",
            "30 ליטרים",
            "50 ליטרים",
            "20 ליטרים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את נפח התמיסה ההתחלתית שהייתה בכלי כנעלם.", math_expression: "v" },
            { verbal_explanation: "נחשב את נפח החומצה הטהורה שהיה בתמיסה ההתחלתית.", math_expression: "0.10v" },
            { verbal_explanation: "נחשב את נפח החומצה הכולל לאחר ההוספה של עשרים ליטרים טהורים.", math_expression: "0.10v + 20" },
            { verbal_explanation: "נחשב את נפח התמיסה הכוללת החדשה.", math_expression: "v + 20" },
            { verbal_explanation: "נציב את הנתונים למשוואת הריכוז החדש.", math_expression: "(0.10v + 20) / (v + 20) = 0.40" },
            { verbal_explanation: "נכפיל במכנה השבר.", math_expression: "0.10v + 20 = 0.40(v + 20)" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "0.10v + 20 = 0.40v + 8" },
            { verbal_explanation: "נכנס איברים דומים משני האגפים.", math_expression: "12 = 0.30v" },
            { verbal_explanation: "נחלק באפס נקודה שלושים כדי למצוא את נפח התמיסה המקורי.", math_expression: "v = 12 / 0.30 = 40" }
        ],
        final_answer: "40"
    },
// =====================================================================
    // תת-נושא 5: בעיות גיאומטריות המשלבות אלגברה (12 שאלות)
    // =====================================================================
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question: "במלבן נתון, הצלע הארוכה גדולה פי 2 מהצלע הקצרה. אם נגדיל את הצלע הקצרה ב-3 ס\"מ ונקטין את הצלע הארוכה ב-2 ס\"מ, שטח המלבן החדש יגדל ב-18 סמ\"ר לעומת שטח המלבן המקורי. מהו אורך הצלע הקצרה במלבן המקורי?",
        options: [
            "6 ס\"מ",
            "5 ס\"מ",
            "8 ס\"מ",
            "4 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את אורך הצלע הקצרה של המלבן המקורי.", math_expression: "x" },
            { verbal_explanation: "לפי הנתון, הצלע הארוכה של המלבן המקורי כפולה ממנה באורכה.", math_expression: "2x" },
            { verbal_explanation: "נחשב את שטח המלבן המקורי (כפל צלעות סמוכות).", math_expression: "S_1 = x &times; 2x = 2x^2" },
            { verbal_explanation: "אורך הצלע הקצרה במלבן החדש לאחר ההגדלה.", math_expression: "x + 3" },
            { verbal_explanation: "אורך הצלע הארוכה במלבן החדש לאחר ההקטנה.", math_expression: "2x - 2" },
            { verbal_explanation: "שטח המלבן החדש יהיה מכפלת הצלעות החדשות.", math_expression: "S_2 = (x + 3)(2x - 2)" },
            { verbal_explanation: "השטח החדש גדול בשמונה עשרה סמ\"ר מהשטח המקורי. נבנה משוואה מתאימה.", math_expression: "S_2 = S_1 + 18 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (x + 3)(2x - 2) = 2x^2 + 18" },
            { verbal_explanation: "נפתח את הסוגריים באמצעות חוק הפילוג.", math_expression: "2x^2 - 2x + 6x - 6 = 2x^2 + 18" },
            { verbal_explanation: "נכנס איברים, ונבטל את האיבר הריבועי המשותף לשני האגפים.", math_expression: "4x - 6 = 18" },
            { verbal_explanation: "נעביר את המספר ימינה ונחלק בארבע למציאת אורך הצלע הקצרה המקורית.", math_expression: "4x = 24 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question: "במשולש ישר זווית, אורך ניצב אחד קטן ב-2 ס\"מ מאורך היתר. הניצב השני קטן ב-4 ס\"מ מאורך היתר. מצאו את אורך היתר.",
        options: [
            "10 ס\"מ",
            "12 ס\"מ",
            "8 ס\"מ",
            "15 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את אורך היתר (הצלע הארוכה ביותר במשולש) כנעלם.", math_expression: "c" },
            { verbal_explanation: "אורך הניצב הראשון נתון כקטן בשתיים מהיתר.", math_expression: "a = c - 2" },
            { verbal_explanation: "אורך הניצב השני נתון כקטן בארבע מהיתר.", math_expression: "b = c - 4" },
            { verbal_explanation: "במשולש ישר זווית מתקיים משפט פיתגורס. נציב את הביטויים של הצלעות במשוואת המשפט.", math_expression: "(c - 2)^2 + (c - 4)^2 = c^2" },
            { verbal_explanation: "נפתח את הסוגריים לפי נוסחת כפל מקוצר של הפרש בריבוע.", math_expression: "(c^2 - 4c + 4) + (c^2 - 8c + 16) = c^2" },
            { verbal_explanation: "נכנס איברים ונבטל את אחד מהאיברים הריבועיים.", math_expression: "2c^2 - 12c + 20 = c^2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; c^2 - 12c + 20 = 0" },
            { verbal_explanation: "נפתור משוואה ריבועית בעזרת פירוק לגורמים (שני מספרים שמכפלתם 20 וסכומם 12-).", math_expression: "(c - 10)(c - 2) = 0" },
            { verbal_explanation: "נקבל שני פתרונות מתמטיים ליתר.", math_expression: "c = 10 , c = 2" },
            { verbal_explanation: "נבדוק את הגיוניות הפתרונות. אם היתר הוא 2, הניצב השני יהיה מינוס שתיים, וזה בלתי אפשרי בגיאומטריה. לכן נפסול את הפתרון הקטן.", math_expression: "c = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question: "בגינה ציבורית ישנה חלקה בצורת ריבוע. החליטו להגדיל את החלקה על ידי הוספת מלבן ברוחב 2 מטרים בצד אחד, ומלבן ברוחב 3 מטרים בצד השני (כך שנוצר מלבן חדש לחלוטין). שטח החלקה החדשה גדול פי 2 משטח החלקה הריבועית המקורית. מה היה אורך צלע הריבוע המקורי?",
        options: [
            "6 מטרים",
            "4 מטרים",
            "8 מטרים",
            "5 מטרים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את אורך צלע החלקה הריבועית המקורית.", math_expression: "x" },
            { verbal_explanation: "נחשב את שטח החלקה הריבועית המקורית.", math_expression: "S_1 = x^2" },
            { verbal_explanation: "אורכי הצלעות של המלבן החדש יהיו צלעות הריבוע בתוספת ההרחבות שבוצעו.", math_expression: "x + 2 , x + 3" },
            { verbal_explanation: "שטח החלקה המלבנית החדשה מחושב על ידי הכפלת אורכי הצלעות החדשות.", math_expression: "S_2 = (x + 2)(x + 3)" },
            { verbal_explanation: "לפי הנתון, השטח החדש כפול מהשטח הישן. נבנה משוואה.", math_expression: "(x + 2)(x + 3) = 2x^2" },
            { verbal_explanation: "נפתח את הסוגריים באגף שמאל.", math_expression: "x^2 + 3x + 2x + 6 = 2x^2" },
            { verbal_explanation: "נכנס איברים דומים ונעביר את כל האיברים לאגף אחד כדי ליצור משוואה ריבועית.", math_expression: "x^2 + 5x + 6 = 2x^2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x^2 - 5x - 6 = 0" },
            { verbal_explanation: "נפרק לטרינום (מספרים שמכפלתם מינוס שש וסכומם מינוס חמש).", math_expression: "(x - 6)(x + 1) = 0" },
            { verbal_explanation: "צלע אינה יכולה להיות בעלת ערך שלילי, ולכן נבחר את הפתרון החיובי בלבד.", math_expression: "x = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question: "היקפו של מגרש מלבני הוא 40 מטרים. ידוע כי אורך אלכסון המגרש הוא &radic;208 (שורש 208) מטרים. מצאו את אורך הצלע הארוכה של המגרש המלבני.",
        options: [
            "12 מטרים",
            "10 מטרים",
            "14 מטרים",
            "16 מטרים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את שתי צלעות המלבן (האורך והרוחב).", math_expression: "x , y" },
            { verbal_explanation: "היקף המלבן הוא פעמיים סכום הצלעות הסמוכות. נחלק את ההיקף בשתיים כדי לקבל את סכומן.", math_expression: "2(x + y) = 40 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x + y = 20" },
            { verbal_explanation: "נבודד את אחת הצלעות כדי להביע אותה באמצעות השנייה.", math_expression: "y = 20 - x" },
            { verbal_explanation: "נשתמש במשפט פיתגורס. סכום ריבועי הצלעות שווה לריבוע האלכסון הנתון.", math_expression: "x^2 + y^2 = (&radic;208)^2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x^2 + y^2 = 208" },
            { verbal_explanation: "נציב את הביטוי שהרכבנו לצלע השנייה אל תוך משוואת פיתגורס.", math_expression: "x^2 + (20 - x)^2 = 208" },
            { verbal_explanation: "נפתח את הסוגריים לפי נוסחת כפל מקוצר של הפרש בריבוע.", math_expression: "x^2 + 400 - 40x + x^2 = 208" },
            { verbal_explanation: "נכנס איברים ונעביר אגף.", math_expression: "2x^2 - 40x + 192 = 0" },
            { verbal_explanation: "נחלק בשתיים להקלת החישוב.", math_expression: "x^2 - 20x + 96 = 0" },
            { verbal_explanation: "נפתור משוואה ריבועית.", math_expression: "(x - 12)(x - 8) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 12 , x = 8" },
            { verbal_explanation: "הפתרונות מייצגים את אורך ורוחב המלבן. השאלה מבקשת את הצלע הארוכה.", math_expression: "12" }
        ],
        final_answer: "12"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question: "במשולש ABC, אורך הבסיס BC גדול ב-5 ס\"מ מהגובה לבסיס (h). שטח המשולש הוא 42 סמ\"ר. מצאו את אורך הגובה h.",
        options: [
            "7 ס\"מ",
            "6 ס\"מ",
            "8 ס\"מ",
            "12 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את הגובה למשולש כנעלם.", math_expression: "h" },
            { verbal_explanation: "אורך הבסיס נתון כגדול מהגובה בחמש.", math_expression: "h + 5" },
            { verbal_explanation: "נשתמש בנוסחה לחישוב שטח משולש: מחצית מכפלת הבסיס בגובה.", math_expression: "S = (b &times; h) / 2" },
            { verbal_explanation: "נציב את הנתונים למשוואה.", math_expression: "((h + 5) &times; h) / 2 = 42" },
            { verbal_explanation: "נכפיל את המשוואה בשתיים כדי להיפטר מהמכנה.", math_expression: "h(h + 5) = 84" },
            { verbal_explanation: "נפתח סוגריים ונעביר אגף ליצירת משוואה ריבועית.", math_expression: "h^2 + 5h - 84 = 0" },
            { verbal_explanation: "נפרק לטרינום (שני מספרים שמכפלתם -84 וסכומם 5).", math_expression: "(h + 12)(h - 7) = 0" },
            { verbal_explanation: "אורך של גובה חייב להיות חיובי. לכן נפסול את הפתרון השלילי.", math_expression: "h = 7" }
        ],
        final_answer: "7"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question: "במעוין, אורך אלכסון אחד גדול ב-4 ס\"מ מאורך האלכסון השני. שטח המעוין הוא 96 סמ\"ר. מצאו את אורך האלכסון הקצר יותר.",
        options: [
            "12 ס\"מ",
            "16 ס\"מ",
            "10 ס\"מ",
            "14 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את האלכסון הקצר כנעלם.", math_expression: "x" },
            { verbal_explanation: "האלכסון הארוך גדול ממנו בארבע סנטימטרים.", math_expression: "x + 4" },
            { verbal_explanation: "נוסחת השטח של מעוין היא מחצית ממכפלת האלכסונים.", math_expression: "S = (d_1 &times; d_2) / 2" },
            { verbal_explanation: "נציב למשוואה ונשווה לשטח הנתון.", math_expression: "(x(x + 4)) / 2 = 96" },
            { verbal_explanation: "נכפיל בשתיים.", math_expression: "x(x + 4) = 192" },
            { verbal_explanation: "נפתח סוגריים ונסדר משוואה ריבועית.", math_expression: "x^2 + 4x - 192 = 0" },
            { verbal_explanation: "נפרק לטרינום ונבחר את הפתרון החיובי המייצג אורך אלכסון.", math_expression: "(x + 16)(x - 12) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question: "סכום השטחים של שני ריבועים הוא 170 סמ\"ר. צלעו של הריבוע הגדול ארוכה ב-4 ס\"מ מצלעו של הריבוע הקטן. מהו אורך צלעו של הריבוע הקטן?",
        options: [
            "7 ס\"מ",
            "5 ס\"מ",
            "9 ס\"מ",
            "11 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את אורך הצלע של הריבוע הקטן.", math_expression: "x" },
            { verbal_explanation: "אורך הצלע של הריבוע הגדול יותר.", math_expression: "x + 4" },
            { verbal_explanation: "נחשב את שטח הריבוע הקטן (צלע בריבוע).", math_expression: "S_1 = x^2" },
            { verbal_explanation: "נחשב את שטח הריבוע הגדול.", math_expression: "S_2 = (x + 4)^2" },
            { verbal_explanation: "נתון שסכום שני השטחים יחדיו הוא מאה ושבעים. נבנה משוואה מתאימה.", math_expression: "x^2 + (x + 4)^2 = 170" },
            { verbal_explanation: "נפתח סוגריים לפי נוסחת סכום בריבוע ונסדר.", math_expression: "x^2 + x^2 + 8x + 16 = 170" },
            { verbal_explanation: "נכנס איברים ונעביר אגף ליצירת משוואה ריבועית.", math_expression: "2x^2 + 8x - 154 = 0" },
            { verbal_explanation: "נחלק את המשוואה בשתיים למען פתרון קל יותר.", math_expression: "x^2 + 4x - 77 = 0" },
            { verbal_explanation: "נפרק לגורמים ונבחר את אורך הצלע החיובי.", math_expression: "(x + 11)(x - 7) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 7" }
        ],
        final_answer: "7"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question: "בטרפז, הבסיס הגדול ארוך ב-6 ס\"מ מהבסיס הקטן. הגובה לטרפז קטן ב-2 ס\"מ מהבסיס הקטן. שטח הטרפז הוא 104 סמ\"ר. מהו אורך הבסיס הקטן של הטרפז?",
        options: [
            "10 ס\"מ",
            "8 ס\"מ",
            "6 ס\"מ",
            "12 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את הבסיס הקטן כנעלם.", math_expression: "a = x" },
            { verbal_explanation: "הבסיס הגדול ארוך בשישה סנטימטרים.", math_expression: "b = x + 6" },
            { verbal_explanation: "הגובה קטן בשני סנטימטרים מהבסיס הקטן.", math_expression: "h = x - 2" },
            { verbal_explanation: "נוסחת שטח טרפז: מחצית מכפלת סכום הבסיסים בגובה.", math_expression: "S = ((a + b) &times; h) / 2" },
            { verbal_explanation: "נציב את הביטויים לתוך הנוסחה ונשווה לשטח הנתון.", math_expression: "((x + x + 6)(x - 2)) / 2 = 104" },
            { verbal_explanation: "נכנס איברים בתוך הסוגריים הראשונים ונכפיל את המשוואה בשתיים.", math_expression: "(2x + 6)(x - 2) = 208" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "2x^2 - 4x + 6x - 12 = 208" },
            { verbal_explanation: "נעביר את המספר לצד שמאל ליצירת משוואה ריבועית.", math_expression: "2x^2 + 2x - 220 = 0" },
            { verbal_explanation: "נחלק בשתיים ונפתור.", math_expression: "x^2 + x - 110 = 0" },
            { verbal_explanation: "פירוק הטרינום יציג לנו את הפתרון החיובי הרלוונטי.", math_expression: "(x - 10)(x + 11) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question: "תיבה פתוחה למעלה (בלי מכסה) נבנתה מריבוע של פח שצלעו 10 ס\"מ, על ידי חיתוך ארבעה ריבועים זהים מכל פינה וקיפול הדפנות כלפי מעלה. אורך צלע של כל ריבוע שנחתך הוא x ס\"מ. ידוע ששטח הפנים של התיבה (כלומר, השטח של פח הנותר) הוא 84 סמ\"ר. מצאו את x.",
        options: [
            "2 ס\"מ",
            "1 ס\"מ",
            "3 ס\"מ",
            "4 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "שטח פח הריבוע המקורי (לפני החיתוך) מחושב לפי צלע כפול צלע.", math_expression: "S_{original} = 10 &times; 10 = 100" },
            { verbal_explanation: "מכל פינה חתכנו ריבוע שצלעו היא הנעלם. נחשב את שטחו של ריבוע אחד כזה.", math_expression: "x^2" },
            { verbal_explanation: "מכיוון שחתכנו ארבעה ריבועים זהים, השטח הכולל שהוסר מהפח המקורי הוא ארבע פעמים השטח שמצאנו.", math_expression: "4x^2" },
            { verbal_explanation: "שטח הפנים של התיבה הנותרת הוא השטח המקורי פחות השטח שהוסר. נבנה משוואה מתאימה.", math_expression: "100 - 4x^2 = 84" },
            { verbal_explanation: "נעביר אגפים ונסדר.", math_expression: "16 = 4x^2" },
            { verbal_explanation: "נחלק בארבע.", math_expression: "x^2 = 4" },
            { verbal_explanation: "נוציא שורש ריבועי. אורך חייב להיות חיובי.", math_expression: "x = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question: "במשולש ישר זווית, הגובה ליתר (h) מחלק את היתר לשני קטעים. הקטע האחד קטן מהגובה ב-3 ס\"מ, והקטע השני גדול מהגובה ב-4 ס\"מ. מצאו את אורך הגובה (הדרכה: השתמשו במשפט שלפיו הגובה ליתר בריבוע שווה למכפלת היטלי הניצבים על היתר).",
        options: [
            "12 ס\"מ",
            "10 ס\"מ",
            "8 ס\"מ",
            "6 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את הגובה ליתר כנעלם המרכזי שלנו.", math_expression: "h" },
            { verbal_explanation: "על פי הנתונים, נגדיר את אורך הקטע הראשון על היתר.", math_expression: "p = h - 3" },
            { verbal_explanation: "על פי הנתונים, נגדיר את הקטע השני על היתר.", math_expression: "q = h + 4" },
            { verbal_explanation: "נשתמש במשפט הגיאומטרי החשוב: הגובה ליתר בריבוע שווה למכפלת שני הקטעים שאליהם הוא מחלק את היתר.", math_expression: "h^2 = p &times; q" },
            { verbal_explanation: "נציב למשוואה את הביטויים שהגדרנו קודם לכן.", math_expression: "h^2 = (h - 3)(h + 4)" },
            { verbal_explanation: "נפתח סוגריים באגף ימין.", math_expression: "h^2 = h^2 + 4h - 3h - 12" },
            { verbal_explanation: "נחסר מכל אגף את האיבר הריבועי, שנישאר עם משוואה לינארית פשוטה.", math_expression: "0 = h - 12" },
            { verbal_explanation: "נעביר את המספר לאגף השני ונמצא את הגובה.", math_expression: "h = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question: "שטחו של מעגל הוא P סמ\"ר. אם נגדיל את רדיוס המעגל ב-2 ס\"מ, השטח יגדל ב- 44&pi; סמ\"ר לעומת השטח המקורי. מה היה אורך הרדיוס המקורי של המעגל?",
        options: [
            "10 ס\"מ",
            "12 ס\"מ",
            "8 ס\"מ",
            "15 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוסחת השטח של המעגל המקורי מבוססת על הרדיוס כנעלם.", math_expression: "P = &pi; &times; R^2" },
            { verbal_explanation: "נרשום את הרדיוס החדש לאחר ההגדלה בשני סנטימטרים.", math_expression: "R_{new} = R + 2" },
            { verbal_explanation: "שטח המעגל החדש יחושב על בסיס הרדיוס המוגדל.", math_expression: "S_{new} = &pi; &times; (R + 2)^2" },
            { verbal_explanation: "לפי הנתון בשאלה, השטח החדש גדול מהשטח המקורי (P) בארבעים וארבעה פאי. נבנה משוואה.", math_expression: "&pi; &times; (R + 2)^2 = &pi; &times; R^2 + 44&pi;" },
            { verbal_explanation: "נחלק את המשוואה כולה בפאי כדי לפשט את הפתרון.", math_expression: "(R + 2)^2 = R^2 + 44" },
            { verbal_explanation: "נפתח את הסוגריים בעזרת נוסחת כפל מקוצר.", math_expression: "R^2 + 4R + 4 = R^2 + 44" },
            { verbal_explanation: "המשתנה הריבועי מצטמצם משני אגפי המשוואה.", math_expression: "4R + 4 = 44" },
            { verbal_explanation: "נעביר אגף ונבודד את המשתנה.", math_expression: "4R = 40" },
            { verbal_explanation: "נחלק בארבע ונקבל את הרדיוס המבוקש.", math_expression: "R = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "בעיות מילוליות (אלגברה)",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question: "במצולע קמור יש n צלעות. מספר האלכסונים במצולע גדול ב-12 ממספר הצלעות שלו. מצאו כמה צלעות יש למצולע. (הדרכה: מספר האלכסונים במצולע בעל n צלעות מחושב לפי הנוסחה n(n-3)/2).",
        options: [
            "8",
            "6",
            "10",
            "12"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "השאלה מספקת את הנוסחה לחישוב מספר האלכסונים.", math_expression: "D = n(n - 3) / 2" },
            { verbal_explanation: "הנתון קובע שמספר האלכסונים גדול בשנים עשר ממספר הצלעות.", math_expression: "D = n + 12" },
            { verbal_explanation: "נשווה בין שני הביטויים המתארים את כמות האלכסונים.", math_expression: "n(n - 3) / 2 = n + 12" },
            { verbal_explanation: "נכפיל בשתיים את המשוואה כולה כדי להיפטר מהמכנה.", math_expression: "n(n - 3) = 2(n + 12)" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "n^2 - 3n = 2n + 24" },
            { verbal_explanation: "נעביר את כל האיברים לאגף שמאל כדי לקבל משוואה ריבועית.", math_expression: "n^2 - 5n - 24 = 0" },
            { verbal_explanation: "נפרק לטרינום.", math_expression: "(n - 8)(n + 3) = 0" },
            { verbal_explanation: "כמות צלעות במצולע חייבת להיות מספר חיובי ושלם, ולכן נבחר את הפתרון החיובי.", math_expression: "n = 8" }
        ],
        final_answer: "8"
    }
];