const questionsDB = [
    // ==========================================
    // תת נושא 1: בעיות קנייה ומכירה (10 שאלות)
    // ==========================================

    {
        topic: "wordProblemsZ",
        subTopic: "בעיות קנייה ומכירה",
        question_text: "רוני קנה 3 מחברות שעולות 12 שקלים כל אחת, ו-2 עטים שעולים 5 שקלים כל אחד. הוא שילם בקופה בשטר של 50 שקלים. כמה עודף הוא אמור לקבל?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 100 100' style='max-width:150px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='20' y='30' width='60' height='40' fill='#10b981' rx='4'/><circle cx='50' cy='50' r='10' fill='#ffffff'/><text x='46' y='54' font-size='12' font-family='Arial' fill='#10b981'>₪</text></svg></div>",
        options: ["4", "14", "6", "16"],
        correctAnswer: 0,
        hint: "חשבו כמה עולות כל המחברות יחד, ואז כמה עולים העטים. חברו את שני הסכומים וחסרו את התוצאה מהשטר שניתן למוכר.",
        solution_steps: [
            { verbal_explanation: "נחשב קודם כל את המחיר של שלוש המחברות יחד.", math_expression: "3 \\times 12 = 36" },
            { verbal_explanation: "כעת נחשב את המחיר של שני העטים יחד.", math_expression: "2 \\times 5 = 10" },
            { verbal_explanation: "נחבר את מחירי המחברות והעטים כדי לדעת כמה עלתה כל הקנייה.", math_expression: "36 + 10 = 46" },
            { verbal_explanation: "כדי למצוא את העודף, נחסר את סכום הקנייה מהשטר של החמישים שקלים.", math_expression: "50 - 46 = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות קנייה ומכירה",
        question_text: "מחיר חולצה הוא 120 שקלים. בסוף העונה ניתנה הנחה של 20 אחוזים (20%) על החולצה. מהו המחיר החדש של החולצה לאחר ההנחה?&rlm;",
        options: ["96", "100", "24", "144"],
        correctAnswer: 0,
        hint: "חשבו כמה הם 20 אחוז מתוך 120 (אפשר לחלק ב-100 ולהכפיל ב-20). לאחר מכן חסרו את ההנחה מהמחיר המקורי.",
        solution_steps: [
            { verbal_explanation: "נמצא קודם כל כמה שווה ההנחה בשקלים. נחשב עשרים אחוז מתוך מאה ועשרים.", math_expression: "120 : 100 \\times 20" },
            { verbal_explanation: "נפתור את התרגיל כדי למצוא את גובה ההנחה.", math_expression: "1.2 \\times 20 = 24" },
            { verbal_explanation: "ההנחה היא של עשרים וארבעה שקלים. כעת נוריד אותה מהמחיר ההתחלתי של החולצה.", math_expression: "120 - 24" },
            { verbal_explanation: "נפתור את תרגיל החיסור לקבלת המחיר החדש.", math_expression: "96" }
        ],
        final_answer: "96"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות קנייה ומכירה",
        question_text: "סוחר קנה 50 קילוגרמים של תפוחים ב-4 שקלים לקילוגרם. 10 קילוגרמים נרקבו ונזרקו. את שאר התפוחים מכר הסוחר ב-6 שקלים לקילוגרם. האם הסוחר הרוויח או הפסיד, וכמה?&rlm;",
        options: ["הרוויח 40", "הפסיד 40", "הרוויח 60", "לא הרוויח ולא הפסיד"],
        correctAnswer: 0,
        hint: "חשבו כמה כסף הוציא הסוחר בקנייה. אחר כך חשבו כמה תפוחים נשארו לו למכור וכמה כסף קיבל עליהם. ההפרש הוא הרווח או ההפסד.",
        solution_steps: [
            { verbal_explanation: "נחשב כמה כסף שילם הסוחר על כל התפוחים שקנה.", math_expression: "50 \\times 4 = 200" },
            { verbal_explanation: "נבדוק כמה קילוגרמים של תפוחים נשארו לו למכור אחרי שזרק עשרה קילוגרמים.", math_expression: "50 - 10 = 40" },
            { verbal_explanation: "נחשב כמה כסף קיבל הסוחר כשמכר את ארבעים הקילוגרמים הנותרים בשש שקלים לקילו.", math_expression: "40 \\times 6 = 240" },
            { verbal_explanation: "הסוחר הכניס מאתיים וארבעים שקלים והוציא מאתיים. נבדוק את ההפרש.", math_expression: "240 - 200 = 40" },
            { verbal_explanation: "מכיוון שההכנסות גדולות מההוצאות, הוא הרוויח כסף.", math_expression: "40" }
        ],
        final_answer: "הרוויח 40"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות קנייה ומכירה",
        question_text: "מחיר של טלוויזיה הוא 2000 שקלים. ניתן לשלם עליה ב-5 תשלומים שווים ללא ריבית. כמה ישלם הקונה בכל חודש?&rlm;",
        options: ["400", "500", "200", "2000"],
        correctAnswer: 0,
        hint: "כדי למצוא את גובהו של תשלום אחד, יש לחלק את המחיר הכולל במספר התשלומים.",
        solution_steps: [
            { verbal_explanation: "נרשום את המחיר הכולל של הטלוויזיה.", math_expression: "2000" },
            { verbal_explanation: "המחיר מתחלק לחמישה תשלומים שווים, לכן נבצע פעולת חילוק.", math_expression: "2000 : 5" },
            { verbal_explanation: "נפתור את התרגיל. עשרים לחלק לחמש זה ארבע, ונוסיף את שני האפסים.", math_expression: "400" },
            { verbal_explanation: "התשלום החודשי יהיה ארבע מאות שקלים.", math_expression: "400" }
        ],
        final_answer: "400"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות קנייה ומכירה",
        question_text: "בחנות יש מבצע: \"קנה זוג נעליים ב-150 שקלים, וקבל את הזוג השני בחצי המחיר!\". מיכל קנתה שני זוגות נעליים. כמה היא שילמה בסך הכל?&rlm;",
        options: ["225", "300", "150", "200"],
        correctAnswer: 0,
        hint: "הזוג הראשון עולה מחיר מלא. הזוג השני עולה בדיוק חצי מהמחיר. חברו את שני המחירים הללו.",
        solution_steps: [
            { verbal_explanation: "המחיר של הזוג הראשון הוא מחיר מלא ללא הנחה.", math_expression: "150" },
            { verbal_explanation: "הזוג השני עולה חצי מזה. נחלק את המחיר המלא בשתיים.", math_expression: "150 : 2 = 75" },
            { verbal_explanation: "כדי לדעת כמה שילמה בסך הכל, נחבר את המחיר של הזוג הראשון והזוג השני.", math_expression: "150 + 75" },
            { verbal_explanation: "נפתור ונגלה את סכום הקנייה הכולל.", math_expression: "225" }
        ],
        final_answer: "225"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות קנייה ומכירה",
        question_text: "מחיר של סמארטפון עלה ב-10 אחוזים (10%) בגלל מיסים חדשים. מחירו המקורי של הסמארטפון היה 1000 שקלים. מהו מחירו החדש לאחר העלייה?&rlm;",
        options: ["1100", "900", "1010", "1110"],
        correctAnswer: 0,
        hint: "חשבו כמה שווים עשרה אחוזים מתוך 1000 שקלים. הוסיפו את התוספת הזו למחיר המקורי.",
        solution_steps: [
            { verbal_explanation: "נחשב כמה הם עשרה אחוזים מתוך אלף שקלים. נחלק במאה ונכפיל בעשר.", math_expression: "1000 : 100 \\times 10" },
            { verbal_explanation: "נפתור את התרגיל. עשר כפול עשר נותן לנו את סכום ההתייקרות בשקלים.", math_expression: "100" },
            { verbal_explanation: "נוסיף את מאה השקלים של ההתייקרות למחיר ההתחלתי של המכשיר.", math_expression: "1000 + 100" },
            { verbal_explanation: "נקבל את המחיר החדש והמעודכן בחנות.", math_expression: "1100" }
        ],
        final_answer: "1100"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות קנייה ומכירה",
        question_text: "אורן קנה מארז של 6 בקבוקי מים ב-18 שקלים. כמה יעלה לו לקנות 10 בקבוקים מאותו הסוג?&rlm;",
        options: ["30", "36", "24", "40"],
        correctAnswer: 0,
        hint: "זהו תרגיל ביחס ישר. קודם מצאו כמה עולה בקבוק אחד (חילוק). אחר כך, הכפילו את המחיר של בקבוק אחד בעשר.",
        solution_steps: [
            { verbal_explanation: "נבדוק כמה עולה בקבוק מים יחיד על ידי חלוקת המחיר הכולל במספר הבקבוקים שבמארז.", math_expression: "18 : 6" },
            { verbal_explanation: "המחיר של כל בקבוק הוא שלושה שקלים.", math_expression: "3" },
            { verbal_explanation: "אנחנו צריכים למצוא את המחיר של עשרה בקבוקים כאלו. נכפיל את המחיר של בקבוק אחד בעשר.", math_expression: "3 \\times 10" },
            { verbal_explanation: "נחשב ונגלה את התשלום הסופי.", math_expression: "30" }
        ],
        final_answer: "30"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות קנייה ומכירה",
        question_text: "מחירו של ספר הוא 60 שקלים. לקוח קנה ספר אחד, והשתמש בקופון שנותן לו הנחה של רבע (\\( \\dfrac{1}{4} \\)) מהמחיר. כמה שקלים שילם הלקוח על הספר?&rlm;",
        options: ["45", "15", "50", "40"],
        correctAnswer: 0,
        hint: "רבע מהמחיר פירושו לחלק את המחיר ב-4. זוהי ההנחה. חסרו את ההנחה מהמחיר המקורי.",
        solution_steps: [
            { verbal_explanation: "נמצא כמה שקלים שווה ההנחה על ידי חלוקת מחיר הספר בארבע.", math_expression: "60 : 4 = 15" },
            { verbal_explanation: "ההנחה היא חמישה עשר שקלים. נוריד את הסכום הזה מהמחיר ההתחלתי.", math_expression: "60 - 15" },
            { verbal_explanation: "נפתור ונקבל את הסכום שהלקוח צריך לשלם בקופה.", math_expression: "45" }
        ],
        final_answer: "45"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות קנייה ומכירה",
        question_text: "חנות בגדים הציעה מבצע: קנו 3 חולצות ב-100 שקלים. אם חולצה בודדת עולה 40 שקלים, כמה שקלים חוסך לקוח שקונה את המבצע של ה-3 חולצות (לעומת קנייה בנפרד)?&rlm;",
        options: ["20", "120", "40", "10"],
        correctAnswer: 0,
        hint: "חשבו כמה היו עולות 3 חולצות ללא המבצע (3 פעמים 40). לאחר מכן, בדקו את ההפרש בין המחיר הזה למחיר המבצע.",
        solution_steps: [
            { verbal_explanation: "נחשב כמה היו עולות שלוש חולצות אם היינו קונים אותן אחת אחת במחיר המלא.", math_expression: "3 \\times 40 = 120" },
            { verbal_explanation: "מחיר המבצע עבור שלישיית החולצות יחד הוא מאה שקלים בלבד.", math_expression: "100" },
            { verbal_explanation: "נחסר את מחיר המבצע מהמחיר הרגיל כדי לראות כמה כסף נשאר לנו בכיס (החיסכון).", math_expression: "120 - 100" },
            { verbal_explanation: "נגלה שהלקוח חסך עשרים שקלים בזכות המבצע.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות קנייה ומכירה",
        question_text: "בעל דוכן פלאפל קונה כל מנה ב-8 שקלים (עלות החומרים) ומוכר אותה ללקוחות ב-15 שקלים. ביום אחד הוא מכר 40 מנות. מהו סך כל הרווח שלו באותו יום?&rlm;",
        options: ["280", "600", "320", "200"],
        correctAnswer: 0,
        hint: "חשבו קודם מהו הרווח הנקי על מנה אחת בלבד (מחיר המכירה פחות מחיר הקנייה). לאחר מכן, הכפילו את הרווח הזה במספר המנות שמכר.",
        solution_steps: [
            { verbal_explanation: "נמצא כמה מרוויח בעל הדוכן על כל מנה אחת. נחסר את ההוצאות שלו מהמחיר שהוא מקבל.", math_expression: "15 - 8 = 7" },
            { verbal_explanation: "הרווח על מנה בודדת הוא שבעה שקלים. הוא מכר ארבעים מנות כאלו ביום אחד.", math_expression: "7 \\times 40" },
            { verbal_explanation: "נכפיל שבע בארבע ונוסיף אפס, כדי לגלות את כל הרווח שהרוויח באותו היום.", math_expression: "280" }
        ],
        final_answer: "280"
    },

    // ==========================================
    // תת נושא 2: בעיות תנועה (10 שאלות)
    // ==========================================

    {
        topic: "wordProblemsZ",
        subTopic: "בעיות תנועה",
        question_text: "משאית נסעה במהירות קבועה של 80 קילומטרים בשעה במשך 3 שעות רצופות. איזה מרחק עברה המשאית בנסיעה זו?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 80' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='60' x2='180' y2='60' stroke='#94a3b8' stroke-width='4' stroke-dasharray='10,5'/><rect x='40' y='25' width='50' height='20' fill='#3b82f6' rx='4'/><circle cx='50' cy='50' r='6' fill='#1e293b'/><circle cx='80' cy='50' r='6' fill='#1e293b'/><line x1='100' y1='35' x2='140' y2='35' stroke='#3b82f6' stroke-width='2' stroke-dasharray='4,4'/><polygon points='140,30 150,35 140,40' fill='#3b82f6'/></svg></div>",
        options: ["240", "160", "320", "200"],
        correctAnswer: 0,
        hint: "כדי למצוא את המרחק שעובר רכב, מכפילים את המהירות שבה הוא נוסע בזמן שבו נסע.",
        solution_steps: [
            { verbal_explanation: "המהירות של המשאית היא שמונים, והיא נסעה במשך שלוש שעות.", math_expression: "80 \\quad , \\quad 3" },
            { verbal_explanation: "כדי למצוא מרחק מכפילים מהירות בזמן.", math_expression: "80 \\times 3" },
            { verbal_explanation: "נכפיל שמונה בשלוש ונוסיף את האפס בחזרה לתוצאה.", math_expression: "240" },
            { verbal_explanation: "המשאית עברה מאתיים וארבעים קילומטרים.", math_expression: "240" }
        ],
        final_answer: "240"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות תנועה",
        question_text: "רכבת עברה מרחק כולל של 300 קילומטרים בזמן של 3 שעות. מה הייתה המהירות הממוצעת של הרכבת?&rlm;",
        options: ["100", "75", "150", "90"],
        correctAnswer: 0,
        hint: "כדי למצוא מהירות, יש לחלק את הדרך (המרחק) בזמן שלקחה הנסיעה.",
        solution_steps: [
            { verbal_explanation: "נרשום את המרחק שהרכבת עברה ואת הזמן שזה לקח לה.", math_expression: "300 \\quad , \\quad 3" },
            { verbal_explanation: "כדי לגלות את המהירות, נחלק את המרחק בזמן.", math_expression: "300 : 3" },
            { verbal_explanation: "שלוש לחלק לשלוש זה אחד. נוסיף את שני האפסים ונקבל את התשובה.", math_expression: "100" }
        ],
        final_answer: "100"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות תנועה",
        question_text: "רוכב אופניים מתכנן לעבור מרחק של 60 קילומטרים. המהירות שלו היא 15 קילומטרים בשעה. כמה שעות תיקח לו הרכיבה?&rlm;",
        options: ["4", "3", "5", "4.5"],
        correctAnswer: 0,
        hint: "כדי למצוא כמה זמן לוקחת נסיעה, מחלקים את המרחק המלא במהירות של כלי הרכב.",
        solution_steps: [
            { verbal_explanation: "אנו יודעים שהמרחק הכללי הוא שישים, והרוכב עובר חמש עשרה קילומטרים בכל שעה.", math_expression: "60 \\quad , \\quad 15" },
            { verbal_explanation: "נחלק את המרחק במהירות כדי למצוא את הזמן.", math_expression: "60 : 15" },
            { verbal_explanation: "נבדוק כמה פעמים חמש עשרה נכנס בשישים.", math_expression: "15 \\times 4 = 60" },
            { verbal_explanation: "לכן, הנסיעה תיקח לו ארבע שעות בדיוק.", math_expression: "4" }
        ],
        final_answer: "4"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות תנועה",
        question_text: "שתי מכוניות יוצאות מאותה נקודה ונוסעות לכיוונים הפוכים לגמרי. מכונית אחת נוסעת במהירות של 60 קילומטרים בשעה, והשנייה במהירות של 80 קילומטרים בשעה. מה יהיה המרחק ביניהן לאחר שעתיים של נסיעה?&rlm;",
        options: ["280", "140", "300", "200"],
        correctAnswer: 0,
        hint: "מכיוון שהן נוסעות לכיוונים הפוכים, הן פותחות פער מהר יותר. חברו את המהירויות שלהן יחד, ואז הכפילו את התוצאה בזמן.",
        solution_steps: [
            { verbal_explanation: "נמצא בכמה קילומטרים המכוניות מתרחקות אחת מהשנייה בכל שעה. לשם כך, נחבר את המהירויות שלהן.", math_expression: "60 + 80 = 140" },
            { verbal_explanation: "בכל שעה נוצר ביניהן מרחק של מאה וארבעים קילומטרים. הן נסעו שעתיים.", math_expression: "140 \\times 2" },
            { verbal_explanation: "נכפיל כדי לגלות את המרחק הכולל שנפתח ביניהן.", math_expression: "280" }
        ],
        final_answer: "280"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות תנועה",
        question_text: "שתי רכבות יצאו משתי תחנות שהמרחק ביניהן הוא 400 קילומטרים. הן נסעו זו לקראת זו באותה המסילה. רכבת אחת נסעה במהירות של 110 קילומטרים בשעה, והשנייה במהירות של 90 קילומטרים בשעה. אחרי כמה שעות הן ייפגשו בדרך?&rlm;",
        options: ["2", "3", "4", "5"],
        correctAnswer: 0,
        hint: "הן נוסעות אחת לקראת השנייה ומצמצמות את המרחק יחד. חברו את שתי המהירויות שלהן כדי לדעת כמה הן מתקרבות בשעה, ואז חלקו את המרחק הכולל בתוצאה.",
        solution_steps: [
            { verbal_explanation: "נחשב בכמה קילומטרים הרכבות מצמצמות את המרחק ביניהן בכל שעה שחולפת. נחבר את המהירויות.", math_expression: "110 + 90 = 200" },
            { verbal_explanation: "בכל שעה הן מתקרבות במאתיים קילומטרים. המרחק הכולל ביניהן בהתחלה היה ארבע מאות.", math_expression: "400 : 200" },
            { verbal_explanation: "נבדוק כמה פעמים מאתיים נכנס בארבע מאות. התשובה תיתן לנו את כמות השעות עד המפגש.", math_expression: "2" }
        ],
        final_answer: "2"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות תנועה",
        question_text: "רוכב קורקינט יצא לדרך במהירות של 12 קילומטרים בשעה. הוא רכב במשך 3 שעות. לאחר מכן נח במשך שעה אחת, והמשיך לרכוב עוד שעתיים באותה המהירות. מהו המרחק הכולל שעבר הרוכב?&rlm;",
        options: ["60", "48", "72", "36"],
        correctAnswer: 0,
        hint: "חשבו רק את שעות הרכיבה בפועל (בזמן המנוחה הוא לא עבר שום מרחק). חברו את זמן הנסיעה והכפילו במהירות.",
        solution_steps: [
            { verbal_explanation: "נחשב כמה שעות בסך הכל הרוכב באמת נסע. נחבר את שעות הנסיעה שלפני המנוחה ואחריה.", math_expression: "3 + 2 = 5" },
            { verbal_explanation: "זמן המנוחה לא נחשב כי הוא לא התקדם בו. כעת, יש לנו חמש שעות רכיבה במהירות של שתים עשרה.", math_expression: "12 \\times 5" },
            { verbal_explanation: "נפתור את התרגיל כדי לגלות את המרחק המלא שעבר על הקורקינט.", math_expression: "60" }
        ],
        final_answer: "60"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות תנועה",
        question_text: "מכונית נסעה 3 שעות במהירות 70 קילומטרים בשעה, ולאחר מכן עוד שעתיים במהירות 90 קילומטרים בשעה. כמה קילומטרים עברה המכונית בסך הכל בנסיעה זו?&rlm;",
        options: ["390", "420", "350", "400"],
        correctAnswer: 0,
        hint: "חשבו את המרחק שעברה המכונית בחלק הראשון של הנסיעה. אחר כך, חשבו את המרחק של החלק השני. בסוף חברו את שני המרחקים.",
        solution_steps: [
            { verbal_explanation: "נחשב את המרחק של החלק הראשון של הנסיעה. נכפיל מהירות בזמן.", math_expression: "70 \\times 3 = 210" },
            { verbal_explanation: "נחשב את המרחק של החלק השני של הנסיעה, באותה הדרך.", math_expression: "90 \\times 2 = 180" },
            { verbal_explanation: "נחבר את המרחק הראשון והמרחק השני כדי לדעת מה המסלול המלא שעשתה המכונית.", math_expression: "210 + 180" },
            { verbal_explanation: "נקבל את התוצאה הסופית והכוללת.", math_expression: "390" }
        ],
        final_answer: "390"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות תנועה",
        question_text: "רוכב אופנוע יצא מעיר א' לעיר ב' הנמצאת במרחק 120 קילומטרים. הוא נסע במהירות של 60 קילומטרים בשעה עד שהגיע לעיר ב', ולאחר מכן מיד חזר באותה הדרך, אך הפעם במהירות של 40 קילומטרים בשעה. כמה שעות סך הכל לקח לו הטיול (הלוך וחזור)?&rlm;",
        options: ["5", "4", "6", "3"],
        correctAnswer: 0,
        hint: "חשבו כמה שעות לקחה הדרך הלוך (מרחק חלקי מהירות ראשונה). אחר כך, חשבו כמה לקחה הדרך חזור (מרחק חלקי מהירות שנייה). בסוף חברו את השעות.",
        solution_steps: [
            { verbal_explanation: "נחשב כמה זמן לקחה הנסיעה הלוך. המרחק הוא מאה ועשרים והמהירות שישים.", math_expression: "120 : 60 = 2" },
            { verbal_explanation: "הנסיעה הלוך לקחה שעתיים. עכשיו נחשב את הזמן של הנסיעה חזור באותה הדרך עם המהירות האיטית יותר.", math_expression: "120 : 40 = 3" },
            { verbal_explanation: "הנסיעה חזור לקחה שלוש שעות. כדי למצוא את הזמן הכולל של כל הטיול, נחבר את השעות.", math_expression: "2 + 3" },
            { verbal_explanation: "סך הכל הוא רכב חמש שעות.", math_expression: "5" }
        ],
        final_answer: "5"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות תנועה",
        question_text: "שודד בורח מהמשטרה ורץ ברחוב במהירות של 8 מטרים בשנייה. שוטר מתחיל לרדוף אחריו בדיוק מאותה נקודה ובאותו כיוון, אך המהירות שלו היא 12 מטרים בשנייה. השוטר התחיל לרוץ רק אחרי שהשודד כבר רץ במשך 10 שניות לבדו. תוך כמה שניות מתחילת הריצה של השוטר, הוא ישיג את השודד?&rlm;",
        options: ["20", "15", "10", "25"],
        correctAnswer: 0,
        hint: "חשבו איזה פער (מרחק) פתח השודד ב-10 השניות הראשונות. לאחר מכן, חשבו בכמה מטרים בשנייה השוטר מצמצם את הפער הזה (הפרש המהירויות). חלקו את הפער בקצב הצמצום.",
        solution_steps: [
            { verbal_explanation: "נבדוק איזה פער פתח השודד בעשר השניות שהוא רץ לבד לפני שהשוטר התחיל לרדוף אחריו.", math_expression: "8 \\times 10 = 80" },
            { verbal_explanation: "הפער הוא שמונים מטרים. השוטר רץ מהר יותר, אז הוא סוגר את הפער. נחשב בכמה מטרים הוא מצמצם את הפער בכל שנייה. נחסר מהירויות.", math_expression: "12 - 8 = 4" },
            { verbal_explanation: "בכל שנייה השוטר מתקרב בארבעה מטרים נוספים. נחלק את הפער כולו בקצב ההתקרבות הזה.", math_expression: "80 : 4" },
            { verbal_explanation: "זה ייתן לנו את הזמן שייקח לשוטר לתפוס את השודד.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות תנועה",
        question_text: "שחיין החליט לשחות לאורך הנהר הלוך ושוב למשך 4 שעות רצופות, מבלי לעצור. המהירות שלו במים נשארה קבועה והיא 2 קילומטרים בשעה. כמה קילומטרים הוא שחה בסך הכל מתחילת האימון ועד סופו?&rlm;",
        options: ["8", "6", "10", "4"],
        correctAnswer: 0,
        hint: "זה לא משנה שהוא שחה הלוך וחזור, כי שאלו רק על המרחק הכולל. פשוט הכפילו את המהירות בזמן האימון הכולל.",
        solution_steps: [
            { verbal_explanation: "השאלה מספרת לנו שהשחיין שחה ארבע שעות רצופות, והמהירות שלו היא תמיד שתיים.", math_expression: "זמן = 4 \\quad , \\quad מהירות = 2" },
            { verbal_explanation: "זה שהוא שחה הלוך וחזור לא משנה את צורת החישוב של המרחק הכולל שעבר במים.", math_expression: "מרחק = מהירות \\times זמן" },
            { verbal_explanation: "נכפיל את המהירות במספר השעות.", math_expression: "2 \\times 4" },
            { verbal_explanation: "השחיין עבר שמונה קילומטרים באימון הזה.", math_expression: "8" }
        ],
        final_answer: "8"
    },

    // ==========================================
    // תת נושא 3: בעיות גיאומטריות (10 שאלות)
    // ==========================================

    {
        topic: "wordProblemsZ",
        subTopic: "בעיות גיאומטריות",
        question_text: "חצר משחקים בנויה בצורת מלבן שאורכו 12 מטרים ורוחבו 8 מטרים. העירייה רוצה להקיף את החצר כולה בגדר בטיחות. כמה מטרים של גדר צריך לקנות?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 100' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='30' y='20' width='140' height='60' fill='none' stroke='#3b82f6' stroke-width='3' stroke-dasharray='4,4'/><text x='95' y='15' font-size='12' font-family='Arial'>12</text><text x='15' y='55' font-size='12' font-family='Arial'>8</text></svg></div>",
        options: ["40", "96", "20", "48"],
        correctAnswer: 0,
        hint: "גדר תמיד מקיפה את הצורה מבחוץ, לכן השאלה מחפשת את ההיקף של המלבן. היקף מלבן שווה לסכום כל ארבעת הצדדים שלו.",
        solution_steps: [
            { verbal_explanation: "נזכור שלמלבן יש שתי צלעות ארוכות ושתי צלעות קצרות (רוחב). אנו מחפשים את ההיקף להקמת הגדר.", math_expression: "היקף = אורך + אורך + רוחב + רוחב" },
            { verbal_explanation: "האורך הוא שתים עשרה והרוחב הוא שמונה. נחבר את פעמיים האורך.", math_expression: "12 + 12 = 24" },
            { verbal_explanation: "נחבר את פעמיים הרוחב.", math_expression: "8 + 8 = 16" },
            { verbal_explanation: "נחבר את הכל יחד כדי למצוא את האורך הכולל של הגדר שצריך לקנות.", math_expression: "24 + 16 = 40" }
        ],
        final_answer: "40"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות גיאומטריות",
        question_text: "קיר בחדר הוא בצורת מלבן, גובהו 3 מטרים ורוחבו 4 מטרים. רוצים לצבוע את הקיר הזה בצבע כחול. קופסת צבע אחת מספיקה כדי לצבוע בדיוק 2 מטרים רבועים. כמה קופסאות צבע נצטרך לקנות כדי לצבוע את כל הקיר?&rlm;",
        options: ["6", "12", "4", "8"],
        correctAnswer: 0,
        hint: "קודם חשבו את שטח הקיר המלא (אורך כפול רוחב). אחר כך חלקו את השטח שקיבלתם בכמות שמספיקה קופסה אחת (2).",
        solution_steps: [
            { verbal_explanation: "כדי לדעת כמה שטח יש לצבוע, נחשב את השטח של הקיר המלבני. נכפיל את הגובה ברוחב.", math_expression: "3 \\times 4 = 12" },
            { verbal_explanation: "השטח הכולל של הקיר הוא שנים עשר מטרים רבועים. אנחנו יודעים שכל קופסת צבע מכסה שניים כאלה.", math_expression: "12 : 2" },
            { verbal_explanation: "נחלק את השטח הכולל בשטח של קופסה אחת כדי לגלות כמה קופסאות צריך.", math_expression: "6" }
        ],
        final_answer: "6"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות גיאומטריות",
        question_text: "לדן יש חוט ברזל באורך 20 סנטימטרים. הוא רוצה לכופף את החוט הזה וליצור ממנו ריבוע סגור. מה יהיה אורך הצלע של הריבוע הזה בסנטימטרים?&rlm;",
        options: ["5", "10", "4", "400"],
        correctAnswer: 0,
        hint: "אורך כל החוט הוא למעשה ההיקף של הריבוע. לריבוע יש 4 צלעות שוות, ולכן יש לחלק את האורך הכולל ב-4.",
        solution_steps: [
            { verbal_explanation: "אורך חוט הברזל כולו מייצג את ההיקף החיצוני של הצורה שדן יבנה.", math_expression: "היקף = 20" },
            { verbal_explanation: "דן רוצה לבנות ריבוע. לריבוע יש ארבע צלעות שבדיוק שוות אחת לשנייה באורכן.", math_expression: "4 צלעות" },
            { verbal_explanation: "כדי למצוא צלע אחת, נחלק את החוט לארבעה חלקים שווים.", math_expression: "20 : 4" },
            { verbal_explanation: "נקבל את אורך הצלע בסנטימטרים.", math_expression: "5" }
        ],
        final_answer: "5"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות גיאומטריות",
        question_text: "לחדר שינה יש רצפה מלבנית. השטח שלה הוא 30 מטרים רבועים. האורך של החדר הוא 6 מטרים. מה הרוחב של החדר?&rlm;",
        options: ["5", "24", "10", "6"],
        correctAnswer: 0,
        hint: "שטח של מלבן זה אורך כפול רוחב. איזה מספר כפול 6 שווה ל-30?",
        solution_steps: [
            { verbal_explanation: "נרשום את חוק השטח עבור רצפה מלבנית עם המספרים שאנחנו יודעים מהשאלה.", math_expression: "30 = 6 \\times רוחב" },
            { verbal_explanation: "אנחנו צריכים למצוא מספר שאם נכפיל אותו בשש נקבל שלושים. אפשר לעשות תרגיל חילוק.", math_expression: "30 : 6" },
            { verbal_explanation: "שלושים לחלק לשש שווה חמש. זה הרוחב של החדר.", math_expression: "5" }
        ],
        final_answer: "5"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות גיאומטריות",
        question_text: "רוצים להדביק פס קישוט צבעוני מסביב לשולחן עגול. הקוטר של השולחן הוא 2 מטרים. מה יהיה האורך בערך של פס הקישוט שנצטרך? (זכרו שהמספר פאי שווה בערך ל-3.14).&rlm;",
        options: ["6.28", "3.14", "12.56", "6"],
        correctAnswer: 0,
        hint: "פס קישוט מסביב לשולחן הוא בעצם ההיקף של המעגל. כדי למצוא היקף של מעגל, מכפילים את הקוטר במספר פאי (3.14).",
        solution_steps: [
            { verbal_explanation: "הקוטר של השולחן העגול נתון לנו והוא שתיים.", math_expression: "קוטר = 2" },
            { verbal_explanation: "כדי למצוא את ההיקף (המסגרת מסביב), צריך להכפיל את הקוטר במספר הקבוע פאי.", math_expression: "היקף = קוטר \\times פאי" },
            { verbal_explanation: "נכתוב את התרגיל עם המספרים שלנו.", math_expression: "2 \\times 3.14" },
            { verbal_explanation: "נכפיל ונקבל את אורך פס הקישוט הנדרש. שתיים כפול שלוש זה שש, ושתיים כפול ארבע עשרה מאיות זה עשרים ושמונה מאיות.", math_expression: "6.28" }
        ],
        final_answer: "6.28"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות גיאומטריות",
        question_text: "בחצר בית הספר יש גינת ירק בצורת משולש. הבסיס של המשולש הוא 10 מטרים, והגובה שיורד אליו הוא 4 מטרים. מהו שטח הגינה שבה אפשר לשתול ירקות?&rlm;",
        options: ["20", "40", "14", "30"],
        correctAnswer: 0,
        hint: "כדי למצוא שטח של משולש, מכפילים את הבסיס בגובה, ואז - הכי חשוב - מחלקים את התוצאה בשתיים.",
        solution_steps: [
            { verbal_explanation: "נאסוף את המידות של המשולש שקיבלנו מהשאלה.", math_expression: "בסיס = 10 \\quad , \\quad גובה = 4" },
            { verbal_explanation: "בחוק השטח של משולש, תמיד מכפילים בסיס בגובה ומחלקים חצי.", math_expression: "(10 \\times 4) : 2" },
            { verbal_explanation: "קודם נעשה את תרגיל הכפל שנמצא למעלה.", math_expression: "10 \\times 4 = 40" },
            { verbal_explanation: "עכשיו ניקח את התשובה הזו ונחלק אותה בשתיים.", math_expression: "40 : 2 = 20" },
            { verbal_explanation: "השטח שבו אפשר לשתול ירקות הוא עשרים מטרים רבועים.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות גיאומטריות",
        question_text: "בריכת שחייה בנויה בצורה של מלבן שאורכו 25 מטרים ורוחבו 10 מטרים. כל יום בבוקר, המציל הולך לאורך שפת הבריכה ומקיף אותה פעם אחת בדיוק. איזה מרחק הוא עובר בכל בוקר?&rlm;",
        options: ["70", "250", "35", "50"],
        correctAnswer: 0,
        hint: "הליכה מסביב לבריכה היא בדיוק כמו חישוב של היקף המלבן. חברו את פעמיים האורך עם פעמיים הרוחב.",
        solution_steps: [
            { verbal_explanation: "אנו מחפשים את היקף הבריכה. נחבר את כל הצלעות החיצוניות שלה. יש פעמיים את האורך ופעמיים את הרוחב.", math_expression: "25 + 25 + 10 + 10" },
            { verbal_explanation: "נחבר את שתי הצלעות הארוכות של עשרים וחמש.", math_expression: "25 + 25 = 50" },
            { verbal_explanation: "נחבר את שתי הצלעות הקצרות של עשר.", math_expression: "10 + 10 = 20" },
            { verbal_explanation: "נחבר הכל יחד כדי למצוא את המרחק הכולל שמקיף את המים.", math_expression: "50 + 20 = 70" }
        ],
        final_answer: "70"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות גיאומטריות",
        question_text: "קופסת מתנה מעץ היא בצורת קובייה. אורך צלע אחת (מקצוע) של הקובייה הוא 5 סנטימטרים. מהו הנפח של הקופסה?&rlm;",
        options: ["125", "25", "150", "20"],
        correctAnswer: 0,
        hint: "קובייה היא קופסה שכל המידות שלה שוות (אורך, רוחב וגובה). נפח של קופסה הוא המכפלה של שלושתן. הכפילו את הצלע בעצמה שלוש פעמים.",
        solution_steps: [
            { verbal_explanation: "אורך הצלע של הקובייה הוא חמש. בקובייה גם הרוחב והגובה שווים בדיוק לחמש.", math_expression: "אורך = 5 \\quad , \\quad רוחב = 5 \\quad , \\quad גובה = 5" },
            { verbal_explanation: "כדי לחשב נפח, נכפיל את שלושת המידות יחד.", math_expression: "5 \\times 5 \\times 5" },
            { verbal_explanation: "נפתור את החלק הראשון: חמש כפול חמש זה עשרים וחמש.", math_expression: "5 \\times 5 = 25" },
            { verbal_explanation: "עכשיו נכפיל את העשרים וחמש בחמש האחרון שנשאר.", math_expression: "25 \\times 5 = 125" },
            { verbal_explanation: "זהו הנפח של הקופסה כולה.", math_expression: "125" }
        ],
        final_answer: "125"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות גיאומטריות",
        question_text: "השטח של ריבוע קטן הוא 16 סנטימטרים רבועים. מהו ההיקף של הריבוע הזה?&rlm;",
        options: ["16", "8", "4", "32"],
        correctAnswer: 0,
        hint: "קודם עליכם למצוא את האורך של הצלע (איזה מספר כפול עצמו נותן 16?). אחרי שיש לכם את הצלע, תכפילו אותה ב-4 כי בריבוע יש 4 צלעות שוות להיקף.",
        solution_steps: [
            { verbal_explanation: "השטח של הריבוע הוא שישה עשר. שטח ריבוע זה צלע כפול עצמה.", math_expression: "צלע \\times צלע = 16" },
            { verbal_explanation: "נחשוב: איזה מספר שווה מכפילים בעצמו כדי לקבל שישה עשר? התשובה היא ארבע.", math_expression: "4 \\times 4 = 16" },
            { verbal_explanation: "הבנו שאורך הצלע הוא ארבע. כדי למצוא את ההיקף, נחבר ארבע צלעות שוות כאלה.", math_expression: "4 + 4 + 4 + 4" },
            { verbal_explanation: "אפשר גם פשוט להכפיל בארבע.", math_expression: "4 \\times 4 = 16" },
            { verbal_explanation: "ההיקף הוא במקרה גם שישה עשר. המספרים שווים אבל זה רק במקרה הזה בגלל המספר ארבע.", math_expression: "16" }
        ],
        final_answer: "16"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות גיאומטריות",
        question_text: "קבלן מרצף שביל גישה לבית שאורכו 10 מטרים ורוחבו 2 מטרים. כל אריח ריצוף שיש לו הוא בצורת ריבוע בשטח של 1 מטר רבוע. כמה אריחים הוא צריך בשביל לסיים לרצף את כל השביל?&rlm;",
        options: ["20", "12", "24", "10"],
        correctAnswer: 0,
        hint: "קודם חשבו מהו השטח המלא של שביל הגישה. בגלל שכל אריח הוא בדיוק בשטח של מטר רבוע אחד, מספר האריחים יהיה שווה בדיוק לשטח השביל.",
        solution_steps: [
            { verbal_explanation: "נמצא את השטח של שביל הגישה המלבני על ידי הכפלת האורך שלו ברוחב שלו.", math_expression: "10 \\times 2 = 20" },
            { verbal_explanation: "השטח הכולל של השביל הוא עשרים מטרים רבועים.", math_expression: "20" },
            { verbal_explanation: "כל אריח מכסה מטר רבוע אחד. לכן נחלק את השטח הכללי באחד.", math_expression: "20 : 1" },
            { verbal_explanation: "מובן מאליו שנצטרך בדיוק עשרים אריחים.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    // ==========================================
    // תת נושא: בעיות יחס (10 שאלות) - כיתה ז'
    // ==========================================

    {
        topic: "wordProblemsZ",
        subTopic: "בעיות יחס",
        question_text: "סבא מחלק 40 סוכריות בין שני נכדיו ביחס של 3 : 5. כמה סוכריות יקבל הנכד שקיבל את החלק הגדול יותר?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 100' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='30' y='30' width='40' height='40' fill='#ef4444' rx='8'/><rect x='130' y='30' width='40' height='40' fill='#3b82f6' rx='8'/><text x='45' y='55' font-size='16' fill='white' font-family='Arial'>3</text><text x='145' y='55' font-size='16' fill='white' font-family='Arial'>5</text><text x='95' y='55' font-size='16' font-family='Arial'>:</text></svg></div>",
        options: ["25", "15", "20", "30"],
        correctAnswer: 0,
        hint: "כדי לחלק כמות לפי יחס, יש לחבר קודם את חלקי היחס כדי למצוא את מספר החלקים הכולל. לאחר מכן, חלקו את הכמות הכוללת במספר החלקים.",
        solution_steps: [
            { verbal_explanation: "נחבר את המספרים שביחס כדי לדעת לכמה חלקים שווים נחלק את כל הסוכריות יחד.", math_expression: "3 + 5 = 8" },
            { verbal_explanation: "נחלק את ארבעים הסוכריות לשמונה חלקים שווים כדי למצוא כמה סוכריות יש בחלק אחד בודד.", math_expression: "40 : 8 = 5" },
            { verbal_explanation: "גילינו שבכל חלק יש חמש סוכריות. הנכד עם החלק הגדול יותר מקבל חמישה חלקים כאלה.", math_expression: "5 \\times 5" },
            { verbal_explanation: "נפתור את תרגיל הכפל ונגלה את כמות הסוכריות שקיבל.", math_expression: "25" }
        ],
        final_answer: "25"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות יחס",
        question_text: "היחס בין מספר הבנים למספר הבנות בכיתה הוא 4 : 5 (על כל 4 בנים יש 5 בנות). בכיתה יש 16 בנים. כמה תלמידים יש בכיתה בסך הכל?&rlm;",
        options: ["36", "20", "30", "40"],
        correctAnswer: 0,
        hint: "בדקו פי כמה גדול מספר הבנים במציאות (16) מהמספר שלהם ביחס (4). הכפילו את מספר הבנות ביחס באותו הכופל, ולבסוף חברו את הבנים והבנות.",
        solution_steps: [
            { verbal_explanation: "מספר הבנים ביחס הוא ארבע. במציאות יש שישה עשר בנים. נבדוק פי כמה זה גדול יותר.", math_expression: "16 : 4 = 4" },
            { verbal_explanation: "הכפלנו את חלק הבנים פי ארבעה. לכן, חובה עלינו להכפיל גם את חלק הבנות ביחס פי ארבעה.", math_expression: "5 \\times 4 = 20" },
            { verbal_explanation: "גילינו שיש עשרים בנות בכיתה. כדי למצוא כמה תלמידים יש סך הכל, נחבר את הבנים והבנות יחד.", math_expression: "16 + 20" },
            { verbal_explanation: "נחבר ונקבל את גודל הכיתה כולה.", math_expression: "36" }
        ],
        final_answer: "36"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות יחס",
        question_text: "שני שותפים השקיעו בעסק. שותף א' השקיע 2000 שקלים ושותף ב' השקיע 3000 שקלים. בחודש הראשון הם הרוויחו 1000 שקלים וחילקו את הרווח לפי יחס ההשקעה שלהם. כמה שקלים קיבל שותף א'?&rlm;",
        options: ["400", "600", "500", "200"],
        correctAnswer: 0,
        hint: "מצאו קודם את היחס המצומצם של ההשקעה (2000 מול 3000). לאחר מכן, חלקו את הרווח לפי היחס שמצאתם.",
        solution_steps: [
            { verbal_explanation: "נמצא את היחס בין ההשקעות שלהם ונצמצם אותו על ידי חלוקה באלף.", math_expression: "2000 : 3000 = 2 : 3" },
            { verbal_explanation: "נחבר את חלקי היחס החדש כדי לדעת לכמה חתיכות שוות מחלקים את הרווח.", math_expression: "2 + 3 = 5" },
            { verbal_explanation: "נחלק את הרווח הכולל (אלף שקלים) לחמישה חלקים שווים.", math_expression: "1000 : 5 = 200" },
            { verbal_explanation: "שותף א' מקבל שני חלקים מתוך הרווח. נכפיל את המנה שמצאנו בשתיים.", math_expression: "200 \\times 2" },
            { verbal_explanation: "נחשב ונקבל את הרווח שלו.", math_expression: "400" }
        ],
        final_answer: "400"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות יחס",
        question_text: "סכום של 120 שקלים חולק בין שלושה אחים ביחס של 1 : 2 : 3. כמה שקלים קיבל האח שקיבל את החלק הקטן ביותר?&rlm;",
        options: ["20", "40", "60", "10"],
        correctAnswer: 0,
        hint: "חלוקה לפי יחס של שלושה מספרים עובדת בדיוק אותו הדבר. חברו את כל שלושת המספרים ביחס, וחלקו את הכמות הכוללת בסכום זה.",
        solution_steps: [
            { verbal_explanation: "נחבר את כל מספרי היחס יחד כדי למצוא את מספר החלקים הכולל שממנו מורכב הכסף.", math_expression: "1 + 2 + 3 = 6" },
            { verbal_explanation: "נחלק את הסכום השלם (מאה ועשרים שקלים) בשישה חלקים.", math_expression: "120 : 6 = 20" },
            { verbal_explanation: "כל חלק שווה לעשרים שקלים. האח עם החלק הקטן ביותר מקבל בדיוק חלק אחד כזה.", math_expression: "20 \\times 1" },
            { verbal_explanation: "לכן, זהו הסכום שהוא יקבל.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות יחס",
        question_text: "היחס בין מספר הספרים של דן למספר הספרים של רועי הוא 2 : 7. ידוע שלרועי יש 25 ספרים יותר ממה שיש לדן. כמה ספרים יש לדן?&rlm;",
        options: ["10", "35", "15", "5"],
        correctAnswer: 0,
        hint: "הפרש החלקים ביחס בין רועי לדן שווה למספר הספרים הנוסף שיש לרועי (25). מצאו כמה ספרים שווים לחלק אחד ביחס.",
        solution_steps: [
            { verbal_explanation: "נבדוק מהו ההפרש בחלקים בין רועי (שבעה חלקים) לדן (שני חלקים).", math_expression: "7 - 2 = 5" },
            { verbal_explanation: "חמשת החלקים האלו שווים בדיוק לפער במציאות, שהוא עשרים וחמישה ספרים. נחלק כדי למצוא ערך של חלק אחד.", math_expression: "25 : 5 = 5" },
            { verbal_explanation: "כל חלק שווה לחמישה ספרים. לדן יש שני חלקים לפי היחס.", math_expression: "5 \\times 2" },
            { verbal_explanation: "נפתור ונגלה כמה ספרים יש לדן בארון.", math_expression: "10" }
        ],
        final_answer: "10"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות יחס",
        question_text: "היקף של מלבן הוא 40 סנטימטרים. היחס בין אורך המלבן לרוחב המלבן הוא 1 : 3. מהו אורך הצלע הארוכה של המלבן?&rlm;",
        options: ["15", "5", "10", "30"],
        correctAnswer: 0,
        hint: "ההיקף מורכב מפעמיים האורך ופעמיים הרוחב. לכן, סכום האורך והרוחב בלבד שווה לחצי מההיקף. חלקו את חצי ההיקף לפי היחס.",
        solution_steps: [
            { verbal_explanation: "היקף המלבן הוא ארבעים. סכום של צלע קצרה וצלע ארוכה אחת שווה בדיוק לחצי מההיקף.", math_expression: "40 : 2 = 20" },
            { verbal_explanation: "נחבר את חלקי היחס של האורך והרוחב יחד.", math_expression: "1 + 3 = 4" },
            { verbal_explanation: "נחלק את סכום הצלעות (עשרים) בארבעת החלקים כדי למצוא את אורך החלק הבסיסי.", math_expression: "20 : 4 = 5" },
            { verbal_explanation: "הצלע הארוכה מיוצגת על ידי המספר שלוש ביחס. נכפיל את המנה בשלוש.", math_expression: "5 \\times 3" },
            { verbal_explanation: "התשובה היא חמישה עשר סנטימטרים.", math_expression: "15" }
        ],
        final_answer: "15"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות יחס",
        question_text: "במפעל מכינים צבע סגול על ידי ערבוב של צבע אדום וצבע כחול ביחס של 2 : 5 (2 כוסות אדום על כל 5 כוסות כחול). הפועל השתמש ב-10 כוסות של צבע אדום. כמה כוסות של צבע כחול הוא צריך להוסיף לתערובת?&rlm;",
        options: ["25", "10", "15", "50"],
        correctAnswer: 0,
        hint: "בדקו פי כמה גדלה כמות הצבע האדום מהיחס המקורי (מ-2 ל-10). הכפילו את כמות הצבע הכחול באותו הכופל בדיוק.",
        solution_steps: [
            { verbal_explanation: "נבדוק פי כמה הכפיל הפועל את כמות הצבע האדום ביחס למתכון המקורי.", math_expression: "10 : 2 = 5" },
            { verbal_explanation: "כדי שהצבע הסגול יצא נכון, חובה להכפיל גם את הצבע הכחול פי חמישה.", math_expression: "5 \\times 5" },
            { verbal_explanation: "נחשב את תרגיל הכפל ונגלה את כמות הכוסות של הצבע הכחול הנדרשת.", math_expression: "25" }
        ],
        final_answer: "25"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות יחס",
        question_text: "בחווה חקלאית יש 24 סוסים ו-36 פרות. מהו היחס המצומצם ביותר בין מספר הסוסים למספר הפרות?&rlm;",
        options: ["2 : 3", "3 : 2", "4 : 6", "1 : 2"],
        correctAnswer: 0,
        hint: "רשמו את המספרים כיחס וחפשו את המספר הגדול ביותר שאפשר לחלק בו גם את 24 וגם את 36 ללא שארית.",
        solution_steps: [
            { verbal_explanation: "נרשום את היחס בין הסוסים לפרות עם המספרים הנתונים.", math_expression: "24 : 36" },
            { verbal_explanation: "נחפש מספר גדול שמחלק את שני הצדדים. נבחר במספר שתים עשרה ונחלק את הסוסים.", math_expression: "24 : 12 = 2" },
            { verbal_explanation: "נחלק גם את מספר הפרות בשתים עשרה.", math_expression: "36 : 12 = 3" },
            { verbal_explanation: "נרשום את היחס המצומצם והסופי שקיבלנו.", math_expression: "2 : 3" }
        ],
        final_answer: "2 : 3"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות יחס",
        question_text: "היחס בין כדורים אדומים לצהובים בקופסה הוא 3 : 4. יש בקופסה 12 כדורים אדומים. דני הוסיף לקופסה עוד 4 כדורים צהובים. מהו היחס החדש והמצומצם בין הכדורים האדומים לצהובים?&rlm;",
        options: ["3 : 5", "3 : 4", "1 : 2", "4 : 5"],
        correctAnswer: 0,
        hint: "תחילה מצאו כמה כדורים צהובים היו בקופסה לפני שדני הוסיף כדורים. לאחר מכן חברו את ההוספה, וצמצמו את היחס החדש.",
        solution_steps: [
            { verbal_explanation: "נבדוק פי כמה גדולה כמות הכדורים האדומים מהיחס המקורי.", math_expression: "12 : 3 = 4" },
            { verbal_explanation: "נכפיל את הצד של הצהובים פי ארבעה כדי לגלות כמה כדורים צהובים היו בהתחלה.", math_expression: "4 \\times 4 = 16" },
            { verbal_explanation: "נוסיף את ארבעת הכדורים הצהובים החדשים שדני הביא אל הכמות שמצאנו.", math_expression: "16 + 4 = 20" },
            { verbal_explanation: "נרשום את היחס החדש שנוצר בין האדומים (שנשארו אותו הדבר) לצהובים החדשים.", math_expression: "12 : 20" },
            { verbal_explanation: "נצמצם את היחס החדש על ידי חלוקת שני הצדדים בארבע ונקבל את התשובה.", math_expression: "3 : 5" }
        ],
        final_answer: "3 : 5"
    },
    {
        topic: "wordProblemsZ",
        subTopic: "בעיות יחס",
        question_text: "סכום הזוויות במשולש הוא תמיד 180 מעלות. הזוויות במשולש מתייחסות זו לזו כיחס של 1 : 2 : 3. מהי המידה במעלות של הזווית הגדולה ביותר במשולש זה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,100 160,100 40,20' fill='#10b981' fill-opacity='0.2' stroke='#10b981' stroke-width='2'/><path d='M 60 100 A 20 20 0 0 0 40 80' fill='none' stroke='#1e293b' stroke-width='1.5'/><path d='M 140 100 A 20 20 0 0 1 130 80' fill='none' stroke='#1e293b' stroke-width='1.5'/><path d='M 40 40 A 20 20 0 0 0 50 55' fill='none' stroke='#1e293b' stroke-width='1.5'/></svg></div>",
        options: ["90", "60", "30", "120"],
        correctAnswer: 0,
        hint: "חלוקה לפי יחס של משולש: חברו את חלקי היחס, חלקו את 180 בסכום שמצאתם, ואז הכפילו את התוצאה בחלק הגדול ביותר שביחס (3).",
        solution_steps: [
            { verbal_explanation: "נחבר את כל מספרי היחס יחד כדי למצוא את מספר החלקים הכולל שממנו מורכב המשולש.", math_expression: "1 + 2 + 3 = 6" },
            { verbal_explanation: "נחלק את הסכום הכולל של הזוויות (מאה ושמונים) בשישה חלקים שווים.", math_expression: "180 : 6 = 30" },
            { verbal_explanation: "כל יחידת יחס שווה לשלושים מעלות. אנו מחפשים את הזווית הגדולה, שמקבלת שלושה חלקים כאלה.", math_expression: "30 \\times 3" },
            { verbal_explanation: "נחשב ונגלה שהזווית הגדולה היא זווית ישרה של תשעים מעלות.", math_expression: "90" }
        ],
        final_answer: "90"
    }
];