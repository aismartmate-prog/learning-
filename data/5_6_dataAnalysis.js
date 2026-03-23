const questionsDB = [
    // ==========================================
    // תת נושא 1: חקר נתונים (10 שאלות)
    // ==========================================

    {
        topic: "math_5_6",
        subTopic: "חקר נתונים",
        question_text: "לדני יש 4 מדבקות, לרוני יש 6 מדבקות, וליעל יש 8 מדבקות. כמה מדבקות יש לכל ילד בממוצע?&rlm;",
        options: ["6", "5", "7", "18"],
        correctAnswer: 0,
        hint: "כדי למצוא ממוצע, קודם מחברים את כל המספרים יחד. אחר כך, מחלקים את הסכום במספר הילדים (שהם 3 ילדים).",
        solution_steps: [
            { verbal_explanation: "קודם נחבר את כמות המדבקות של כל שלושת הילדים יחד כדי למצוא את הסכום הכולל.", math_expression: "4 + 6 + 8 = 18" },
            { verbal_explanation: "יש לנו סך הכל שלושה ילדים. נחלק את הסכום שקיבלנו במספר הילדים.", math_expression: "18 \\div 3" },
            { verbal_explanation: "נפתור את תרגיל החילוק ונקבל את הממוצע.", math_expression: "6" }
        ],
        final_answer: "6"
    },
    {
        topic: "math_5_6",
        subTopic: "חקר נתונים",
        question_text: "התרשים שלפניכם מראה כמה ספרים קראו תלמידים בשלושה חודשים. בחודש הראשון קראו 10 ספרים, בחודש השני 20 ספרים, ובחודש השלישי 15 ספרים. כמה ספרים קראו בסך הכל בכל שלושת החודשים יחד?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='30' y1='120' x2='180' y2='120' stroke='#1e293b' stroke-width='2'/><line x1='30' y1='120' x2='30' y2='20' stroke='#1e293b' stroke-width='2'/><rect x='50' y='70' width='20' height='50' fill='#3b82f6'/><rect x='100' y='20' width='20' height='100' fill='#ef4444'/><rect x='150' y='45' width='20' height='75' fill='#10b981'/><text x='55' y='135' font-size='12' font-family='Arial'>1</text><text x='105' y='135' font-size='12' font-family='Arial'>2</text><text x='155' y='135' font-size='12' font-family='Arial'>3</text><text x='10' y='75' font-size='10' font-family='Arial'>10</text><text x='10' y='25' font-size='10' font-family='Arial'>20</text><text x='10' y='50' font-size='10' font-family='Arial'>15</text></svg></div>",
        options: ["45", "35", "50", "40"],
        correctAnswer: 0,
        hint: "כדי למצוא את הסך הכל, עליכם לחבר את כל הכמויות המופיעות בנתונים.",
        solution_steps: [
            { verbal_explanation: "נסתכל על הנתונים: בחודש הראשון קראו עשרה ספרים, בשני עשרים, ובשלישי חמישה עשר.", math_expression: "10 \\quad , \\quad 20 \\quad , \\quad 15" },
            { verbal_explanation: "נחבר את הכמויות של החודש הראשון והחודש השני יחד.", math_expression: "10 + 20 = 30" },
            { verbal_explanation: "נוסיף לתוצאה שקיבלנו את הכמות של החודש השלישי.", math_expression: "30 + 15" },
            { verbal_explanation: "נפתור ונגלה את סך כל הספרים שנקראו.", math_expression: "45" }
        ],
        final_answer: "45"
    },
    {
        topic: "math_5_6",
        subTopic: "חקר נתונים",
        question_text: "קבוצה של 5 חברים אספה בקבוקים למיחזור. הממוצע של הבקבוקים שאסף כל ילד הוא 10. כמה בקבוקים בסך הכל אספו כל חמשת החברים יחד?&rlm;",
        options: ["50", "15", "5", "20"],
        correctAnswer: 0,
        hint: "ממוצע אומר שאם נחלק את כל הבקבוקים שווה בשווה, כל ילד יקבל 10. לכן, כדי למצוא את הסך הכל, נכפיל את הממוצע במספר הילדים.",
        solution_steps: [
            { verbal_explanation: "אנחנו יודעים שהממוצע הוא עשר ושמספר הילדים הוא חמש.", math_expression: "10 \\quad , \\quad 5" },
            { verbal_explanation: "כדי למצוא את הסכום הכולל שממנו התחלנו, צריך להכפיל את הממוצע בכמות הילדים.", math_expression: "10 \\times 5" },
            { verbal_explanation: "נפתור את תרגיל הכפל הפשוט.", math_expression: "50" }
        ],
        final_answer: "50"
    },
    {
        topic: "math_5_6",
        subTopic: "חקר נתונים",
        question_text: "בשבוע מסוים, הטמפרטורה הגבוהה ביותר שנמדדה הייתה 32 מעלות, והטמפרטורה הנמוכה ביותר הייתה 20 מעלות. מהו ההפרש בין הטמפרטורה הגבוהה ביותר לנמוכה ביותר (טווח הנתונים)?&rlm;",
        options: ["12", "10", "14", "52"],
        correctAnswer: 0,
        hint: "הפרש במתמטיקה אומר שצריך לעשות תרגיל חיסור: לקחת את המספר הגדול ביותר ולחסר ממנו את המספר הקטן ביותר.",
        solution_steps: [
            { verbal_explanation: "נזהה את המספר הגדול ביותר שמופיע בנתונים.", math_expression: "32" },
            { verbal_explanation: "נזהה את המספר הקטן ביותר שמופיע בנתונים.", math_expression: "20" },
            { verbal_explanation: "נבנה תרגיל חיסור כדי למצוא את ההבדל (ההפרש) ביניהם.", math_expression: "32 - 20" },
            { verbal_explanation: "נחסר ונקבל את התשובה הסופית.", math_expression: "12" }
        ],
        final_answer: "12"
    },
    {
        topic: "math_5_6",
        subTopic: "חקר נתונים",
        question_text: "רמי שיחק באולינג וקיבל את התוצאות הבאות בשלושה משחקים: 80, 100, ו-120. מהו ממוצע הנקודות שלו למשחק?&rlm;",
        options: ["100", "90", "110", "300"],
        correctAnswer: 0,
        hint: "חברו את כל התוצאות משלושת המשחקים יחד, ולאחר מכן חלקו את התוצאה ב-3 (כי היו 3 משחקים).",
        solution_steps: [
            { verbal_explanation: "נחבר את הנקודות מהמשחק הראשון והשני.", math_expression: "80 + 100 = 180" },
            { verbal_explanation: "נוסיף לסכום הזה את הנקודות מהמשחק השלישי כדי לדעת כמה נקודות הוא צבר בסך הכל.", math_expression: "180 + 120 = 300" },
            { verbal_explanation: "נחלק את הסכום הכולל במספר המשחקים שרמי שיחק (שלוש).", math_expression: "300 \\div 3" },
            { verbal_explanation: "נפתור ונגלה את הממוצע למשחק אחד.", math_expression: "100" }
        ],
        final_answer: "100"
    },
    {
        topic: "math_5_6",
        subTopic: "חקר נתונים",
        question_text: "בחנות צעצועים בדקו אילו צבעים של מכוניות הכי נמכרים. נמכרו 5 מכוניות אדומות, 8 מכוניות כחולות ו-3 מכוניות לבנות. איזה צבע הוא הצבע השכיח ביותר (זה שהופיע הכי הרבה פעמים)?&rlm;",
        options: ["כחול", "אדום", "לבן", "שחור"],
        correctAnswer: 0,
        hint: "הצבע השכיח הוא זה שיש לו את המספר הכי גדול בנתונים.",
        solution_steps: [
            { verbal_explanation: "נסתכל על כל הכמויות שרשומות לנו לגבי צבעי המכוניות.", math_expression: "5 \\quad , \\quad 8 \\quad , \\quad 3" },
            { verbal_explanation: "נחפש את המספר שהוא הגדול ביותר מבין כל הנתונים הללו.", math_expression: "8 > 5 \\quad , \\quad 8 > 3" },
            { verbal_explanation: "המספר שמונה הוא הגדול ביותר, והוא שייך למכוניות הכחולות. לכן זה הצבע השכיח.", math_expression: "8" }
        ],
        final_answer: "כחול"
    },
    {
        topic: "math_5_6",
        subTopic: "חקר נתונים",
        question_text: "בכיתה יש 30 תלמידים. חצי מהתלמידים אוהבים כדורגל, 10 תלמידים אוהבים כדורסל, והשאר אוהבים טניס. כמה תלמידים אוהבים טניס?&rlm;",
        options: ["5", "10", "15", "20"],
        correctAnswer: 0,
        hint: "חשבו קודם כמה זה חצי מ-30. חברו אותם עם אלו שאוהבים כדורסל (10), ואז חסרו את התוצאה מהכמות הכוללת בכיתה.",
        solution_steps: [
            { verbal_explanation: "נמצא כמה תלמידים אוהבים כדורגל. חצי משלושים זה אומר לחלק בשתיים.", math_expression: "30 \\div 2 = 15" },
            { verbal_explanation: "נחבר את הילדים שאוהבים כדורגל עם הילדים שאוהבים כדורסל.", math_expression: "15 + 10 = 25" },
            { verbal_explanation: "כדי למצוא את אלו שאוהבים טניס, ניקח את כל תלמידי הכיתה ונחסר מהם את הילדים שכבר ספרנו.", math_expression: "30 - 25" },
            { verbal_explanation: "התוצאה היא מספר הילדים שאוהבים טניס.", math_expression: "5" }
        ],
        final_answer: "5"
    },
    {
        topic: "math_5_6",
        subTopic: "חקר נתונים",
        question_text: "שירה קנתה 3 חטיפים במחיר של 4 שקלים כל אחד, ועוד 2 חטיפים במחיר של 9 שקלים כל אחד. מה המחיר הממוצע ששילמה שירה לחטיף אחד?&rlm;",
        options: ["6", "5", "7", "8"],
        correctAnswer: 0,
        hint: "חשבו את כל הכסף ששירה שילמה בסך הכל (על ידי תרגילי כפל וחיבור). אחר כך, חלקו את הסכום הזה בכל כמות החטיפים שהיא קנתה (5 חטיפים).",
        solution_steps: [
            { verbal_explanation: "נחשב כמה עלו החטיפים הראשונים (שלושה חטיפים שעולים ארבעה שקלים).", math_expression: "3 \\times 4 = 12" },
            { verbal_explanation: "נחשב כמה עלו החטיפים הנוספים (שני חטיפים שעולים תשעה שקלים).", math_expression: "2 \\times 9 = 18" },
            { verbal_explanation: "נחבר את המחירים כדי למצוא את הסכום הכולל ששילמה שירה בקופה.", math_expression: "12 + 18 = 30" },
            { verbal_explanation: "נבדוק כמה חטיפים בסך הכל היא קנתה.", math_expression: "3 + 2 = 5" },
            { verbal_explanation: "כדי למצוא ממוצע, נחלק את כל הכסף בסך כל החטיפים.", math_expression: "30 \\div 5" },
            { verbal_explanation: "נקבל את המחיר הממוצע לחטיף אחד.", math_expression: "6" }
        ],
        final_answer: "6"
    },
    {
        topic: "math_5_6",
        subTopic: "חקר נתונים",
        question_text: "נועה חסכה כסף במשך 4 שבועות. הממוצע של החיסכון שלה בכל שבוע היה 15 שקלים. ידוע שבשלושת השבועות הראשונים היא חסכה 10 שקלים, 20 שקלים ו-15 שקלים. כמה כסף חסכה נועה בשבוע הרביעי?&rlm;",
        options: ["15", "10", "20", "5"],
        correctAnswer: 0,
        hint: "אם הממוצע ל-4 שבועות הוא 15, חשבו את הסכום הכולל (4 כפול 15). חברו את מה שחסכה ב-3 השבועות הראשונים וחסרו מהסכום הכולל.",
        solution_steps: [
            { verbal_explanation: "נמצא את הסכום הכולל שנועה חסכה בכל ארבעת השבועות על ידי הכפלת הממוצע במספר השבועות.", math_expression: "15 \\times 4 = 60" },
            { verbal_explanation: "נחבר את הכסף שהיא חסכה בשבוע הראשון, השני והשלישי כדי לדעת כמה כבר יש לה.", math_expression: "10 + 20 + 15" },
            { verbal_explanation: "נחשב את החיבור הזה.", math_expression: "30 + 15 = 45" },
            { verbal_explanation: "כדי לגלות כמה חסכה בשבוע הרביעי, נחסר מהסכום הכולל את מה שכבר ספרנו.", math_expression: "60 - 45" },
            { verbal_explanation: "נפתור ונקבל את הכסף של השבוע האחרון.", math_expression: "15" }
        ],
        final_answer: "15"
    },
    {
        topic: "math_5_6",
        subTopic: "חקר נתונים",
        question_text: "שלושה פועלים עבדו בבניין. פועל א' עבד 8 שעות. פועל ב' עבד 6 שעות. אנחנו לא יודעים כמה זמן עבד פועל ג', אבל הממוצע של שלושתם יחד הוא 7 שעות. כמה שעות עבד פועל ג'?&rlm;",
        options: ["7", "6", "8", "5"],
        correctAnswer: 0,
        hint: "אם הממוצע של שלושה אנשים הוא 7, הסך הכל של כולם ביחד הוא 21. כמה שעות חסרות כדי להגיע ל-21?",
        solution_steps: [
            { verbal_explanation: "נחשב את סך כל שעות העבודה של כל השלושה יחד על ידי הכפלת הממוצע בכמות האנשים.", math_expression: "7 \\times 3 = 21" },
            { verbal_explanation: "נחבר את השעות של הפועל הראשון ושל הפועל השני שאנחנו כבר מכירים.", math_expression: "8 + 6 = 14" },
            { verbal_explanation: "כדי לגלות את השעות של הפועל השלישי, ניקח את הסכום הכולל ונחסר ממנו את מה שחישבנו.", math_expression: "21 - 14" },
            { verbal_explanation: "נקבל את שעות העבודה החסרות.", math_expression: "7" }
        ],
        final_answer: "7"
    },

    // ==========================================
    // תת נושא 2: ניתוח סיכויים (10 שאלות)
    // ==========================================

    {
        topic: "math_5_6",
        subTopic: "ניתוח סיכויים",
        question_text: "כשמטילים קוביית משחק רגילה (שיש בה מספרים מ-1 עד 6), מה הסיכוי שהקובייה תיפול בדיוק על המספר 4?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 100 100' style='max-width:150px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='25' y='25' width='50' height='50' fill='#ffffff' stroke='#3b82f6' stroke-width='3' rx='8'/><circle cx='40' cy='40' r='4' fill='#ef4444'/><circle cx='60' cy='40' r='4' fill='#ef4444'/><circle cx='40' cy='60' r='4' fill='#ef4444'/><circle cx='60' cy='60' r='4' fill='#ef4444'/></svg></div>",
        options: ["1 : 6", "4 : 6", "1 : 4", "1 : 2"],
        correctAnswer: 0,
        hint: "בקובייה יש 6 צדדים שווים. המספר 4 מופיע רק על צד אחד מתוכם. הסיכוי נרשם כמו שבר: הכמות שאנחנו רוצים, לחלק בסך הכל.",
        solution_steps: [
            { verbal_explanation: "לקובייה רגילה יש בסך הכל שישה צדדים אפשריים.", math_expression: "6" },
            { verbal_explanation: "המספר ארבע מופיע על הקובייה בדיוק פעם אחת בלבד.", math_expression: "1" },
            { verbal_explanation: "לכן, הסיכוי שנצליח לקבל את המספר הזה הוא אחד מתוך כל השישה אפשרויות.", math_expression: "\\dfrac{1}{6}" },
            { verbal_explanation: "זה אומר שהסיכוי הוא אחד לשש.", math_expression: "1 : 6" }
        ],
        final_answer: "1 : 6"
    },
    {
        topic: "math_5_6",
        subTopic: "ניתוח סיכויים",
        question_text: "כשמטילים קוביית משחק רגילה (מ-1 עד 6), מה הסיכוי לקבל מספר זוגי (כמו 2, 4 או 6)?&rlm;",
        options: ["1 : 2", "1 : 6", "3 : 4", "2 : 6"],
        correctAnswer: 0,
        hint: "ספרו כמה מספרים זוגיים יש בקובייה (יש שלושה כאלה). רשמו שבר של 3 מתוך 6, וחשבו איך אפשר לצמצם אותו.",
        solution_steps: [
            { verbal_explanation: "נספור כמה מספרים זוגיים יש בקובייה: המספר שתיים, המספר ארבע והמספר שש.", math_expression: "3" },
            { verbal_explanation: "סך כל המספרים האפשריים בקובייה הוא שישה.", math_expression: "6" },
            { verbal_explanation: "הסיכוי שלנו לקבל אחד מהם הוא שלושה מספרים מתוך שישה אפשריים.", math_expression: "\\dfrac{3}{6}" },
            { verbal_explanation: "נצמצם את השבר על ידי חלוקה בשלוש. נראה שזה בדיוק חצי מהמספרים.", math_expression: "\\dfrac{1}{2}" }
        ],
        final_answer: "1 : 2"
    },
    {
        topic: "math_5_6",
        subTopic: "ניתוח סיכויים",
        question_text: "כשמטילים מטבע רגיל באוויר, יש לו שני צדדים: עץ או פלי. מה הסיכוי שהמטבע ייפול על הצד של פלי?&rlm;",
        options: ["1 : 2", "1 : 4", "1 : 1", "0"],
        correctAnswer: 0,
        hint: "למטבע יש רק שתי תוצאות אפשריות שוות. פלי הוא צד אחד מתוך השניים האלה.",
        solution_steps: [
            { verbal_explanation: "למטבע יש בסך הכל שני צדדים אפשריים.", math_expression: "2" },
            { verbal_explanation: "אנחנו רוצים שהמטבע ייפול על צד ספציפי אחד (הפלי).", math_expression: "1" },
            { verbal_explanation: "הסיכוי שזה יקרה הוא צד אחד מתוך שניים.", math_expression: "\\dfrac{1}{2}" }
        ],
        final_answer: "1 : 2"
    },
    {
        topic: "math_5_6",
        subTopic: "ניתוח סיכויים",
        question_text: "דני מסובב סביבון שיש לו 4 פאות שוות. פאה אחת אדומה, אחת כחולה, אחת ירוקה ואחת צהובה. מה הסיכוי שהסביבון ייפול על הפאה האדומה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 100 100' style='max-width:150px; width:100%; border-radius:50%; background:#f8fafc; border:2px solid #e2e8f0;'><path d='M 50 50 L 50 0 A 50 50 0 0 1 100 50 Z' fill='#ef4444'/><path d='M 50 50 L 100 50 A 50 50 0 0 1 50 100 Z' fill='#3b82f6'/><path d='M 50 50 L 50 100 A 50 50 0 0 1 0 50 Z' fill='#10b981'/><path d='M 50 50 L 0 50 A 50 50 0 0 1 50 0 Z' fill='#eab308'/></svg></div>",
        options: ["1 : 4", "1 : 3", "1 : 2", "1 : 5"],
        correctAnswer: 0,
        hint: "לסביבון יש 4 צדדים שווים לגמרי. הצבע האדום נמצא רק על צד אחד.",
        solution_steps: [
            { verbal_explanation: "נספור כמה צדדים (פאות) יש לסביבון בסך הכל.", math_expression: "4" },
            { verbal_explanation: "נספור על כמה פאות מופיע הצבע האדום שאנחנו רוצים.", math_expression: "1" },
            { verbal_explanation: "לכן, הסיכוי שהסביבון ייפול על אדום הוא פאה אחת מתוך ארבע פאות.", math_expression: "\\dfrac{1}{4}" }
        ],
        final_answer: "1 : 4"
    },
    {
        topic: "math_5_6",
        subTopic: "ניתוח סיכויים",
        question_text: "בתוך שקית אטומה מונחים 3 כדורים אדומים ו-2 כדורים כחולים. מוציאים מהשקית כדור אחד מבלי להסתכל. מה הסיכוי שנוציא כדור אדום?&rlm;",
        options: ["3 : 5", "2 : 5", "3 : 2", "1 : 5"],
        correctAnswer: 0,
        hint: "קודם צריך לחשב כמה כדורים יש בסך הכל בתוך השקית (חברו את כולם). אחר כך בידקו כמה מתוכם הם אדומים ורשמו את זה כשבר.",
        solution_steps: [
            { verbal_explanation: "נחבר את מספר הכדורים האדומים עם הכחולים כדי לדעת כמה יש בסך הכל בשקית.", math_expression: "3 + 2 = 5" },
            { verbal_explanation: "אנחנו רוצים להוציא כדור אדום, ויש לנו שלושה כדורים כאלה מתוך כל החמישה.", math_expression: "3" },
            { verbal_explanation: "הסיכוי נרשם בצורת שבר: שלוש (שזה מה שאנחנו רוצים) מתוך חמש (שזה הסך הכל).", math_expression: "\\dfrac{3}{5}" }
        ],
        final_answer: "3 : 5"
    },
    {
        topic: "math_5_6",
        subTopic: "ניתוח סיכויים",
        question_text: "מטילים קוביית משחק רגילה (שיש בה מספרים מ-1 עד 6). איזה סיכוי מתאר את האפשרות שהקובייה תיפול על מספר שקטן מ-10?&rlm;",
        options: ["1 (אירוע בטוח)", "0 (אירוע בלתי אפשרי)", "1 : 2", "6 : 10"],
        correctAnswer: 0,
        hint: "תחשבו על המספרים שיש על קובייה: 1, 2, 3, 4, 5, 6. האם יש ביניהם מספר שהוא לא קטן מ-10? אם כל התוצאות תמיד נכונות, קוראים לזה 'אירוע בטוח' והסיכוי שלו הוא 1 שלם.",
        solution_steps: [
            { verbal_explanation: "נבדוק אילו מספרים יכולים לצאת בהטלת קובייה רגילה.", math_expression: "1, 2, 3, 4, 5, 6" },
            { verbal_explanation: "נשאל את עצמנו: האם כל המספרים האלה באמת קטנים מעשר? התשובה היא כן.", math_expression: "6 < 10" },
            { verbal_explanation: "מכיוון שלא משנה מה יצא לנו, זה תמיד יהיה מספר קטן מעשר, זהו אירוע שחייב לקרות בטוח.", math_expression: "1" }
        ],
        final_answer: "1 (אירוע בטוח)"
    },
    {
        topic: "math_5_6",
        subTopic: "ניתוח סיכויים",
        question_text: "מטילים קוביית משחק רגילה. מה הסיכוי לקבל את המספר 7?&rlm;",
        options: ["0 (אירוע בלתי אפשרי)", "1 : 6", "1 : 7", "1"],
        correctAnswer: 0,
        hint: "האם יש בכלל את המספר 7 על קובייה רגילה? אם משהו לא יכול לקרות לעולם, הסיכוי שלו הוא אפס.",
        solution_steps: [
            { verbal_explanation: "ניזכר שקובייה רגילה מגיעה רק עד המספר שש.", math_expression: "1, 2, 3, 4, 5, 6" },
            { verbal_explanation: "המספר שבע לא קיים בכלל על הקובייה הזו.", math_expression: "0" },
            { verbal_explanation: "אירוע שלא יכול לקרות לעולם נקרא 'בלתי אפשרי' והסיכוי שלו מיוצג על ידי אפס.", math_expression: "0" }
        ],
        final_answer: "0 (אירוע בלתי אפשרי)"
    },
    {
        topic: "math_5_6",
        subTopic: "ניתוח סיכויים",
        question_text: "מערבבים חפיסת קלפים שיש בה 10 קלפים, הממוספרים מהמספר 1 ועד המספר 10. מה הסיכוי לשלוף קלף שהמספר שעליו גדול מ-8?&rlm;",
        options: ["1 : 5", "2 : 5", "1 : 10", "8 : 10"],
        correctAnswer: 0,
        hint: "בדקו אילו מספרים מהחפיסה הם גדולים מ-8 (המספרים 9 ו-10). כלומר, יש 2 קלפים טובים מתוך 10. צמצמו את השבר הזה.",
        solution_steps: [
            { verbal_explanation: "נמצא כמה קלפים בחפיסה עונים על התנאי שלנו, כלומר מספרים שיותר גדולים משמונה (המספר תשע והמספר עשר).", math_expression: "2" },
            { verbal_explanation: "אנחנו יודעים שבחפיסה יש בסך הכל עשרה קלפים.", math_expression: "10" },
            { verbal_explanation: "נרשום את הסיכוי בתור שבר: שני קלפים מתוך עשרה.", math_expression: "\\dfrac{2}{10}" },
            { verbal_explanation: "נצמצם את השבר על ידי חלוקת שני המספרים בשתיים, כדי לקבל צורה פשוטה יותר.", math_expression: "\\dfrac{1}{5}" }
        ],
        final_answer: "1 : 5"
    },
    {
        topic: "math_5_6",
        subTopic: "ניתוח סיכויים",
        question_text: "לפניכם סביבון מיוחד. חצי ממנו צבוע בצבע אדום, רבע צבוע בכחול, ורבע צבוע בצהוב. מה הסיכוי שהסביבון ייפול על הצבע הכחול?&rlm;",
        options: ["1 : 4", "1 : 2", "3 : 4", "1 : 3"],
        correctAnswer: 0,
        hint: "שימו לב לגודל השטח שיש לכל צבע. בשאלה כבר כתוב איזה חלק מהסביבון הוא הצבע הכחול.",
        solution_steps: [
            { verbal_explanation: "השאלה מספרת לנו בדיוק איזה שטח לוקח כל צבע בסביבון.", math_expression: "חצי , רבע , רבע" },
            { verbal_explanation: "אנחנו מחפשים רק את הצבע הכחול. השטח שלו הוא בדיוק רבע מהסביבון כולו.", math_expression: "רבע" },
            { verbal_explanation: "לכן, הסיכוי ליפול על הצבע הזה הוא בדיוק רבע (אחד מתוך ארבעה חלקים שווים).", math_expression: "\\dfrac{1}{4}" }
        ],
        final_answer: "1 : 4"
    },
    {
        topic: "math_5_6",
        subTopic: "ניתוח סיכויים",
        question_text: "יש לנו שתי שקיות עם כדורים. בשקית א' יש כדור אחד אדום וכדור אחד לבן (סה''כ 2 כדורים). בשקית ב' יש 2 כדורים אדומים ו-8 כדורים לבנים (סה''כ 10 כדורים). באיזו שקית יש סיכוי גדול יותר להוציא כדור אדום בעיניים עצומות?&rlm;",
        options: ["שקית א'", "שקית ב'", "אותו סיכוי בשתיהן", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "חשבו את הסיכוי לכל שקית בנפרד (בשקית א' חצי מהכדורים אדומים, בשקית ב' 2 מתוך 10 הם אדומים). איזה שבר גדול יותר?",
        solution_steps: [
            { verbal_explanation: "נבדוק את שקית א'. יש שם כדור אדום אחד מתוך שני כדורים בסך הכל. הסיכוי הוא חצי.", math_expression: "\\dfrac{1}{2}" },
            { verbal_explanation: "נבדוק את שקית ב'. יש שם שני כדורים אדומים מתוך עשרה. נצמצם את השבר ונראה שזה שווה לחמישית.", math_expression: "\\dfrac{2}{10} = \\dfrac{1}{5}" },
            { verbal_explanation: "עכשיו נשווה בין הסיכויים. איזה שבר גדול יותר, חצי או חמישית?", math_expression: "\\dfrac{1}{2} > \\dfrac{1}{5}" },
            { verbal_explanation: "חצי זה יותר מחמישית, ולכן הסיכוי בשקית הראשונה גבוה הרבה יותר.", math_expression: "שקית א" }
        ],
        final_answer: "שקית א'"
    }
];