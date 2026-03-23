const questionsDB = [
    // ==========================================
    // תת נושא 1: הסתברות מותנית מלאה (נוסחת בייס, התפלגות) (10 שאלות)
    // ==========================================

    {
        topic: "probability_571",
        subTopic: "הסתברות מותנית מלאה (נוסחת בייס, התפלגות)",
        question_text: "בעיר מסוימת 60% מהתושבים אוהבים קפה. מבין אוהבי הקפה, 70% גם אוהבים תה. מבין אלו שאינם אוהבים קפה, 40% אוהבים תה. נבחר תושב באקראי והתברר שהוא אוהב תה. מה ההסתברות שהוא אוהב גם קפה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='10' y='10' width='180' height='100' fill='none' stroke='#94a3b8' stroke-width='2'/><circle cx='70' cy='60' r='40' fill='#3b82f6' fill-opacity='0.3' stroke='#3b82f6' stroke-width='2'/><circle cx='130' cy='60' r='40' fill='#ef4444' fill-opacity='0.3' stroke='#ef4444' stroke-width='2'/><text x='40' y='30' font-size='12' font-family='Arial'>A</text><text x='150' y='30' font-size='12' font-family='Arial'>B</text></svg></div>",
        options: ["21 : 29", "7 : 10", "42 : 100", "14 : 29"],
        correctAnswer: 0,
        hint: "הגדירו מאורעות A (קפה) ו-B (תה). השתמשו בנוסחת בייס לחשב את ההסתברות של A בהינתן B. עליכם לחשב קודם את ההסתברות הכוללת לאהוב תה.",
        solution_steps: [
            { verbal_explanation: "הגדרת ההסתברויות היסודיות למאורע הראשון (קפה) והמשלים שלו על פי הנתונים.", math_expression: "P(A) = 0.6 \\quad , \\quad P(A') = 0.4" },
            { verbal_explanation: "הגדרת ההסתברויות המותניות (תה בהינתן קפה, ותה בהינתן לא-קפה).", math_expression: "P(B|A) = 0.7 \\quad , \\quad P(B|A') = 0.4" },
            { verbal_explanation: "חישוב החיתוך בין שני המאורעות (אוהב קפה וגם תה).", math_expression: "P(A \\cap B) = 0.6 \\times 0.7 = 0.42" },
            { verbal_explanation: "חישוב החיתוך של המאורע המשלים (לא אוהב קפה וכן אוהב תה).", math_expression: "P(A' \\cap B) = 0.4 \\times 0.4 = 0.16" },
            { verbal_explanation: "חישוב ההסתברות הכוללת לאהוב תה (חוק ההסתברות השלמה).", math_expression: "P(B) = P(A \\cap B) + P(A' \\cap B) = 0.42 + 0.16 = 0.58" },
            { verbal_explanation: "שימוש בנוסחת ההסתברות המותנית (בייס) למציאת ההסתברות לאהוב קפה בהינתן תה.", math_expression: "P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}" },
            { verbal_explanation: "הצבת הערכים המחושבים לתוך הנוסחה.", math_expression: "P(A|B) = \\dfrac{0.42}{0.58}" },
            { verbal_explanation: "צמצום השבר ליצירת שבר רגיל טהור להצגה סופית.", math_expression: "\\dfrac{42}{58} = \\dfrac{21}{29}" }
        ],
        final_answer: "21 : 29"
    },
    {
        topic: "probability_571",
        subTopic: "הסתברות מותנית מלאה (נוסחת בייס, התפלגות)",
        question_text: "במפעל מיוצרים ברגים בשלוש מכונות. מכונה א' מייצרת 20% מהברגים, מכונה ב' 30%, ומכונה ג' 50%. אחוז הברגים הפגומים הוא: 5% ממכונה א', 4% מ-ב', ו-2% מ-ג'. נבחר בורג באקראי והתברר שהוא פגום. מה ההסתברות שהוא מיוצר במכונה ג'?&rlm;",
        options: ["10 : 32", "5 : 16", "2 : 5", "1 : 3"],
        correctAnswer: 1,
        hint: "השתמשו בחוק ההסתברות השלמה למציאת סך כל הברגים הפגומים. לאחר מכן חלקו את החיתוך של (מכונה ג' ופגום) בהסתברות הכוללת לבורג פגום.",
        solution_steps: [
            { verbal_explanation: "רישום ההסתברויות לכל אחת מהמכונות.", math_expression: "P(A) = 0.2 \\quad , \\quad P(B) = 0.3 \\quad , \\quad P(C) = 0.5" },
            { verbal_explanation: "רישום ההסתברויות המותניות לבורג פגום מכל מכונה.", math_expression: "P(D|A) = 0.05 \\quad , \\quad P(D|B) = 0.04 \\quad , \\quad P(D|C) = 0.02" },
            { verbal_explanation: "חישוב סך ההסתברות הכוללת לבחירת בורג פגום מהמפעל (חוק ההסתברות השלמה).", math_expression: "P(D) = 0.2 \\times 0.05 + 0.3 \\times 0.04 + 0.5 \\times 0.02" },
            { verbal_explanation: "ביצוע ההכפלות הפנימיות למציאת חלקה של כל מכונה בפגומים.", math_expression: "P(D) = 0.010 + 0.012 + 0.010" },
            { verbal_explanation: "סכימת ההסתברות הכוללת.", math_expression: "P(D) = 0.032" },
            { verbal_explanation: "בניית ההסתברות המותנית ההפוכה באמצעות נוסחת בייס.", math_expression: "P(C|D) = \\dfrac{P(C \\cap D)}{P(D)}" },
            { verbal_explanation: "הצבת הנתונים המחושבים במונה (פגומים ממכונה ג') ובמכנה (כלל הפגומים).", math_expression: "P(C|D) = \\dfrac{0.010}{0.032}" },
            { verbal_explanation: "צמצום השבר לשבר פשוט ונקי.", math_expression: "\\dfrac{10}{32} = \\dfrac{5}{16}" }
        ],
        final_answer: "5 : 16"
    },
    {
        topic: "probability_571",
        subTopic: "הסתברות מותנית מלאה (נוסחת בייס, התפלגות)",
        question_text: "ידוע כי מאורעות A ו-B הם בלתי תלויים. נתון: \\( P(A) = 0.6 \\) ו- \\( P(B) = 0.8 \\). חשבו את ההסתברות המותנית: \\( P(A \\cup B | A) \\).&rlm;",
        options: ["1", "0.6", "0.8", "0.48"],
        correctAnswer: 0,
        hint: "שימו לב להגדרת ההסתברות המותנית. החיתוך בין מאורע (A או B) למאורע A הוא פשוט המאורע A עצמו. תלות המאורעות אינה משנה כאן כלל.",
        solution_steps: [
            { verbal_explanation: "כתיבת הנוסחה להסתברות מותנית על פי המאורעות המורכבים בשאלה.", math_expression: "P(A \\cup B | A) = \\dfrac{P((A \\cup B) \\cap A)}{P(A)}" },
            { verbal_explanation: "ניתוח לוגי של קבוצות: החיתוך של איחוד קבוצות עם אחת מהקבוצות עצמן, מניב תמיד את אותה הקבוצה.", math_expression: "(A \\cup B) \\cap A = A" },
            { verbal_explanation: "הצבת הפישוט האלגברי אל תוך המונה של ההסתברות המותנית.", math_expression: "P(A \\cup B | A) = \\dfrac{P(A)}{P(A)}" },
            { verbal_explanation: "צמצום זהה המעיד על הסתברות ודאית ומוחלטת.", math_expression: "\\dfrac{P(A)}{P(A)} = 1" }
        ],
        final_answer: "1"
    },
    {
        topic: "probability_571",
        subTopic: "הסתברות מותנית מלאה (נוסחת בייס, התפלגות)",
        question_text: "נתונים שני מאורעות, A ו-B. ידוע כי \\( P(A) = 0.5 \\), \\( P(B|A) = 0.4 \\), ו- \\( P(B|A') = 0.2 \\). חשבו את ההסתברות \\( P(A'|B') \\). (הציגו כעשרוני עד 3 ספרות).&rlm;",
        options: ["0.4", "0.571", "0.8", "0.5"],
        correctAnswer: 1,
        hint: "השתמשו בכלל המשלים כדי למצוא את ההסתברויות לחיתוכים. מצאו את P(B') וחשבו את המותנית המבוקשת.",
        solution_steps: [
            { verbal_explanation: "חישוב ההסתברות למאורע המשלים ל-A.", math_expression: "P(A') = 1 - 0.5 = 0.5" },
            { verbal_explanation: "חישוב החיתוך הראשון מתוך ההסתברויות הנתונות.", math_expression: "P(A \\cap B) = 0.5 \\times 0.4 = 0.2" },
            { verbal_explanation: "חישוב החיתוך השני עבור המאורע המשלים.", math_expression: "P(A' \\cap B) = 0.5 \\times 0.2 = 0.1" },
            { verbal_explanation: "חישוב ההסתברות הכללית למאורע השני בשלמותו.", math_expression: "P(B) = 0.2 + 0.1 = 0.3" },
            { verbal_explanation: "הסקת ההסתברות הכללית למאורע המשלים.", math_expression: "P(B') = 1 - 0.3 = 0.7" },
            { verbal_explanation: "חישוב החיתוך בין שני המאורעות המשלימים יחד מתוך קבוצת המשלים הכוללת.", math_expression: "P(A' \\cap B') = P(A') - P(A' \\cap B) = 0.5 - 0.1 = 0.4" },
            { verbal_explanation: "בניית ההסתברות המותנית הסופית למאורעות משלימים.", math_expression: "P(A'|B') = \\dfrac{P(A' \\cap B')}{P(B')}" },
            { verbal_explanation: "הצבת הנתונים וקבלת שבר מקורב.", math_expression: "P(A'|B') = \\dfrac{0.4}{0.7} = \\dfrac{4}{7} \\approx 0.571" }
        ],
        final_answer: "0.571"
    },
    {
        topic: "probability_571",
        subTopic: "הסתברות מותנית מלאה (נוסחת בייס, התפלגות)",
        question_text: "בכיתה יש 30 תלמידים. 18 לומדים פיזיקה, 12 לומדים כימיה, ו-5 לומדים את שני המקצועות. בוחרים תלמיד באקראי ומגלים שהוא לומד לפחות אחד משני המקצועות. מה ההסתברות שהוא לומד כימיה?&rlm;",
        options: ["12 : 25", "12 : 30", "5 : 12", "5 : 25"],
        correctAnswer: 0,
        hint: "המרחב המצומצם שלנו הוא תלמידים שלומדים לפחות מקצוע אחד (איחוד הקבוצות). מצאו את גודל האיחוד, ולאחר מכן חלקו את לומדי הכימיה במספר זה.",
        solution_steps: [
            { verbal_explanation: "תרגום הנתונים המספריים להסתברויות בסיסיות בחלוקה לסך הכל.", math_expression: "P(A) = \\dfrac{18}{30} \\quad , \\quad P(B) = \\dfrac{12}{30} \\quad , \\quad P(A \\cap B) = \\dfrac{5}{30}" },
            { verbal_explanation: "חישוב ההסתברות לאיחוד המאורעות, המייצג 'לפחות אחד מהמקצועות'.", math_expression: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)" },
            { verbal_explanation: "הצבת הנתונים בנוסחת האיחוד.", math_expression: "P(A \\cup B) = \\dfrac{18}{30} + \\dfrac{12}{30} - \\dfrac{5}{30} = \\dfrac{25}{30}" },
            { verbal_explanation: "כתיבת הנוסחה להסתברות המותנית על פי נתוני השאלה.", math_expression: "P(B | A \\cup B) = \\dfrac{P(B \\cap (A \\cup B))}{P(A \\cup B)}" },
            { verbal_explanation: "מכיוון שקבוצת הכימיה מוכלת במלואה באיחוד, חיתוכם שווה לקבוצת הכימיה לבדה.", math_expression: "P(B \\cap (A \\cup B)) = P(B) = \\dfrac{12}{30}" },
            { verbal_explanation: "הצבה בנוסחת ההסתברות המותנית השלמה.", math_expression: "P(B | A \\cup B) = \\dfrac{\\dfrac{12}{30}}{\\dfrac{25}{30}}" },
            { verbal_explanation: "צמצום המכנים המשותפים להגעה לשבר סופי.", math_expression: "\\dfrac{12}{25}" }
        ],
        final_answer: "12 : 25"
    },
    {
        topic: "probability_571",
        subTopic: "הסתברות מותנית מלאה (נוסחת בייס, התפלגות)",
        question_text: "נתון כי \\( P(A|B) = 0.6 \\), \\( P(B|A) = 0.4 \\), ו- \\( P(A) = 0.3 \\). חשבו את ההסתברות של מאורע B.&rlm;",
        options: ["0.2", "0.4", "0.5", "0.3"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת ההסתברות המותנית פעמיים. חלצו את החיתוך מתוך צד אחד, ואז הציבו אותו במשוואה השנייה לחילוץ P(B).",
        solution_steps: [
            { verbal_explanation: "כתיבת הנוסחה המקשרת בין הסתברות מותנית לחיתוך המאורעות עבור המצב הראשון.", math_expression: "P(B|A) = \\dfrac{P(A \\cap B)}{P(A)}" },
            { verbal_explanation: "חילוץ החיתוך המשותף על ידי הכפלה אלכסונית.", math_expression: "P(A \\cap B) = P(B|A) \\times P(A)" },
            { verbal_explanation: "הצבת הנתונים המספריים לחישוב מוחלט של החיתוך.", math_expression: "P(A \\cap B) = 0.4 \\times 0.3 = 0.12" },
            { verbal_explanation: "כתיבת הנוסחה המקשרת עבור המצב ההפוך והנתון אף הוא.", math_expression: "P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}" },
            { verbal_explanation: "חילוץ המאורע הבודד על ידי החלפת מקומות באלכסון.", math_expression: "P(B) = \\dfrac{P(A \\cap B)}{P(A|B)}" },
            { verbal_explanation: "הצבת הערכים להשגת התוצאה.", math_expression: "P(B) = \\dfrac{0.12}{0.6}" },
            { verbal_explanation: "חישוב החלוקה العשרונית.", math_expression: "P(B) = 0.2" }
        ],
        final_answer: "0.2"
    },
    {
        topic: "probability_571",
        subTopic: "הסתברות מותנית מלאה (נוסחת בייס, התפלגות)",
        question_text: "נתונים שני מאורעות תלויים. ההסתברות ל-A היא 0.4. ההסתברות ל-B היא 0.5. ההסתברות לאיחוד המאורעות היא 0.7. מה ההסתברות שמאורע A התרחש, אם ידוע שמאורע B לא התרחש?&rlm;",
        options: ["0.4", "0.2", "0.5", "0.6"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת האיחוד למציאת החיתוך. לאחר מכן, מצאו את החיתוך של (A וגם לא B) באמצעות חיסור, וחלקו בהסתברות שלא B.",
        solution_steps: [
            { verbal_explanation: "שימוש בנוסחת האיחוד לחילוץ ההסתברות של החיתוך המשותף.", math_expression: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)" },
            { verbal_explanation: "הצבת הנתונים ובידוד החיתוך במשוואה.", math_expression: "0.7 = 0.4 + 0.5 - P(A \\cap B) \\Rightarrow P(A \\cap B) = 0.9 - 0.7 = 0.2" },
            { verbal_explanation: "חישוב ההסתברות למאורע המשלים לשני, המהווה את מרחב המדגם המותנה.", math_expression: "P(B') = 1 - P(B) = 1 - 0.5 = 0.5" },
            { verbal_explanation: "חישוב החיתוך של מאורע ראשון עם המאורע המשלים לשני.", math_expression: "P(A \\cap B') = P(A) - P(A \\cap B)" },
            { verbal_explanation: "הצבת הערכים לחישוב החיתוך המשלים.", math_expression: "P(A \\cap B') = 0.4 - 0.2 = 0.2" },
            { verbal_explanation: "הרכבת ההסתברות המותנית הנדרשת בבעיה.", math_expression: "P(A|B') = \\dfrac{P(A \\cap B')}{P(B')}" },
            { verbal_explanation: "השלמת החישוב להשגת התוצאה הסופית.", math_expression: "P(A|B') = \\dfrac{0.2}{0.5} = 0.4" }
        ],
        final_answer: "0.4"
    },
    {
        topic: "probability_571",
        subTopic: "הסתברות מותנית מלאה (נוסחת בייס, התפלגות)",
        question_text: "בבדיקת מחלה נדירה, ידוע כי ההסתברות שאדם חולה היא 0.01. אם אדם חולה, הבדיקה מזהה זאת כחיובית בהסתברות של 0.99. אם אדם בריא, הבדיקה שוגה ומראה חיובי בהסתברות של 0.02. אם הבדיקה של אדם יצאה חיובית, מה ההסתברות שהוא באמת חולה?&rlm;",
        options: ["1 : 3", "0.01", "0.99", "0.5"],
        correctAnswer: 0,
        hint: "הגדירו מאורעות ל'חולה' ו'בדיקה חיובית'. חשבו את ההסתברות הכוללת לבדיקה חיובית, ולאחר מכן השתמשו בנוסחת בייס.",
        solution_steps: [
            { verbal_explanation: "הגדרת הסתברויות בסיסיות לקבוצות המחלה והבריאות (המאורע והמשלים שלו).", math_expression: "P(A) = 0.01 \\quad , \\quad P(A') = 0.99" },
            { verbal_explanation: "הגדרת הסתברויות מותניות לקבלת בדיקה חיובית (מאורע שני) בשני המצבים.", math_expression: "P(B|A) = 0.99 \\quad , \\quad P(B|A') = 0.02" },
            { verbal_explanation: "חישוב סך ההסתברות הכוללת לקבלת בדיקה חיובית מכל מקור שהוא.", math_expression: "P(B) = P(A) \\times P(B|A) + P(A') \\times P(B|A')" },
            { verbal_explanation: "הצבת המספרים לחישוב מדויק.", math_expression: "P(B) = 0.01 \\times 0.99 + 0.99 \\times 0.02" },
            { verbal_explanation: "ביצוע פעולות כפל וחיבור.", math_expression: "P(B) = 0.0099 + 0.0198 = 0.0297" },
            { verbal_explanation: "כתיבת הנוסחה המותנית ההפוכה הדרושה לפתרון הבעיה (בייס).", math_expression: "P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}" },
            { verbal_explanation: "הצבת החיתוך החיובי וההסתברות הכוללת.", math_expression: "P(A|B) = \\dfrac{0.0099}{0.0297}" },
            { verbal_explanation: "צמצום השבר העשרוני לשבר פשוט ונקי (חלוקה בתשעים ותשע עשר-אלפיות).", math_expression: "\\dfrac{1}{3}" }
        ],
        final_answer: "1 : 3"
    },
    {
        topic: "probability_571",
        subTopic: "הסתברות מותנית מלאה (נוסחת בייס, התפלגות)",
        question_text: "ההסתברות שסטודנט יעבור את המבחן במתמטיקה היא 0.7. אם הוא עובר במתמטיקה, ההסתברות שיעבור בפיזיקה היא 0.8. אם הוא נכשל במתמטיקה, ההסתברות שיעבור בפיזיקה היא 0.3. ידוע כי סטודנט עבר בפיזיקה. מה ההסתברות שהוא עבר גם במתמטיקה?&rlm;",
        options: ["56 : 65", "14 : 17", "7 : 8", "0.56"],
        correctAnswer: 0,
        hint: "עליכם למצוא את ההסתברות השלמה למעבר בפיזיקה, ואז להשתמש בנוסחת בייס לחשב את ההסתברות למעבר במתמטיקה מתוך קבוצה זו.",
        solution_steps: [
            { verbal_explanation: "קביעת ההסתברויות הראשוניות למבחן במתמטיקה.", math_expression: "P(A) = 0.7 \\quad , \\quad P(A') = 0.3" },
            { verbal_explanation: "קביעת ההסתברויות המותניות למבחן בפיזיקה.", math_expression: "P(B|A) = 0.8 \\quad , \\quad P(B|A') = 0.3" },
            { verbal_explanation: "חישוב ההסתברות השלמה לעבור במבחן בפיזיקה במקובץ.", math_expression: "P(B) = P(A) \\times P(B|A) + P(A') \\times P(B|A')" },
            { verbal_explanation: "הצבה וביצוע ההכפלות.", math_expression: "P(B) = 0.7 \\times 0.8 + 0.3 \\times 0.3 = 0.56 + 0.09" },
            { verbal_explanation: "סכימת החלקים לערך בודד.", math_expression: "P(B) = 0.65" },
            { verbal_explanation: "הרכבת התניה הפוכה לבקשת התרגיל בהינתן שהמבחן השני עבר בהצלחה.", math_expression: "P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}" },
            { verbal_explanation: "הצבת החיתוך החיובי מחולק בהסתברות השלמה שנמצאה.", math_expression: "P(A|B) = \\dfrac{0.56}{0.65}" },
            { verbal_explanation: "הכפלה במאה לקבלת שבר שלמים כנדרש בתשובות.", math_expression: "\\dfrac{56}{65}" }
        ],
        final_answer: "56 : 65"
    },
    {
        topic: "probability_571",
        subTopic: "הסתברות מותנית מלאה (נוסחת בייס, התפלגות)",
        question_text: "קיימים שני מאורעות A ו-B כך ש- \\( P(A|B) = P(A|B') \\). מה ניתן להסיק בוודאות מתמטית לגבי המאורעות הללו?&rlm;",
        options: ["המאורעות הם בלתי תלויים", "המאורעות הם זרים לחלוטין", "הסתברות כל אחד מהם היא 0.5", "המאורע A מוכל במאורע B"],
        correctAnswer: 0,
        hint: "אם ההסתברות של A בהינתן B זהה להסתברות של A בהינתן ש-B לא קרה, המשמעות היא שקיומו או אי-קיומו של B אינו משפיע כלל על הסיכוי של A להתרחש.",
        solution_steps: [
            { verbal_explanation: "כתיבת המשוואה המגדירה את מצב ההתניה מן השאלה.", math_expression: "P(A|B) = P(A|B')" },
            { verbal_explanation: "פירוק הצד השמאלי על פי חוקי ההתניה הרשמיים.", math_expression: "P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}" },
            { verbal_explanation: "פירוק הצד הימני על פי אותם החוקים למאורע משלים.", math_expression: "P(A|B') = \\dfrac{P(A \\cap B')}{P(B')} = \\dfrac{P(A) - P(A \\cap B)}{1 - P(B)}" },
            { verbal_explanation: "השוואה והכפלה בהצלבה לבחינת הקשר האלגברי המוחלט.", math_expression: "P(A \\cap B)(1 - P(B)) = P(B)(P(A) - P(A \\cap B))" },
            { verbal_explanation: "פתיחת סוגריים ופירוק המכפלות למרכיבים בסיסיים.", math_expression: "P(A \\cap B) - P(A \\cap B)P(B) = P(A)P(B) - P(A \\cap B)P(B)" },
            { verbal_explanation: "צמצום איברים זהים משני האגפים מבסס קשר מתמטי טהור.", math_expression: "P(A \\cap B) = P(A) \\times P(B)" },
            { verbal_explanation: "משוואה זו היא בדיוק ההגדרה המתמטית הבלעדית לחוסר תלות בין מאורעות.", math_expression: "1=1" }
        ],
        final_answer: "המאורעות הם בלתי תלויים"
    },

    // ==========================================
    // תת נושא 2: דיאגרמות עץ רב-שלביות והסתברות מורכבת (10 שאלות)
    // ==========================================

    {
        topic: "probability_571",
        subTopic: "דיאגרמות עץ רב-שלביות והסתברות מורכבת",
        question_text: "בכד יש 4 כדורים אדומים ו-6 כדורים כחולים. מוציאים באקראי כדור אחד, לא מחזירים אותו, ומוציאים כדור שני. מה ההסתברות ששני הכדורים שהוצאו הם באותו צבע?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><path d='M 60 20 L 60 100 Q 60 130 100 130 Q 140 130 140 100 L 140 20' fill='none' stroke='#94a3b8' stroke-width='4'/><circle cx='80' cy='110' r='10' fill='#ef4444'/><circle cx='110' cy='110' r='10' fill='#ef4444'/><circle cx='95' cy='90' r='10' fill='#ef4444'/><circle cx='120' cy='90' r='10' fill='#ef4444'/><circle cx='80' cy='70' r='10' fill='#3b82f6'/><circle cx='110' cy='70' r='10' fill='#3b82f6'/><circle cx='95' cy='50' r='10' fill='#3b82f6'/><circle cx='120' cy='50' r='10' fill='#3b82f6'/><circle cx='80' cy='30' r='10' fill='#3b82f6'/><circle cx='110' cy='30' r='10' fill='#3b82f6'/></svg></div>",
        options: ["7 : 15", "1 : 3", "8 : 15", "2 : 5"],
        correctAnswer: 0,
        hint: "בנו דיאגרמת עץ לשני שלבים. שימו לב שההוצאה היא ללא החזרה, לכן המכנה בשלב השני יורד ל-9, ומונה הצבע שהוצא יורד באחד.",
        solution_steps: [
            { verbal_explanation: "רישום ההסתברויות הראשוניות להוצאה בשלב הראשון.", math_expression: "P(A_{1}) = \\dfrac{4}{10} \\quad , \\quad P(B_{1}) = \\dfrac{6}{10}" },
            { verbal_explanation: "קביעת ההסתברות המותנית להוצאת אדום בשלב השני, בהנחה שהוצא אדום בראשון (ללא החזרה ולכן יש פחות כדורים).", math_expression: "P(A_{2}|A_{1}) = \\dfrac{3}{9}" },
            { verbal_explanation: "קביעת ההסתברות המותנית לכחול בשני, בהנחה שהוצא כחול בראשון.", math_expression: "P(B_{2}|B_{1}) = \\dfrac{5}{9}" },
            { verbal_explanation: "חישוב מסלול מלא של שני אדומים ברצף במורד העץ.", math_expression: "P(A_{1} \\cap A_{2}) = \\dfrac{4}{10} \\times \\dfrac{3}{9} = \\dfrac{12}{90}" },
            { verbal_explanation: "חישוב מסלול מלא של שני כחולים ברצף במורד העץ.", math_expression: "P(B_{1} \\cap B_{2}) = \\dfrac{6}{10} \\times \\dfrac{5}{9} = \\dfrac{30}{90}" },
            { verbal_explanation: "סכימת כלל הענפים המקיימים את דרישת השאלה לצבע זהה.", math_expression: "P(S) = \\dfrac{12}{90} + \\dfrac{30}{90} = \\dfrac{42}{90}" },
            { verbal_explanation: "צמצום השבר הסטנדרטי על ידי חלוקה בשש במונה ובמכנה.", math_expression: "\\dfrac{42}{90} = \\dfrac{7}{15}" }
        ],
        final_answer: "7 : 15"
    },
    {
        topic: "probability_571",
        subTopic: "דיאגרמות עץ רב-שלביות והסתברות מורכבת",
        question_text: "קבוצת כדורגל מנצחת משחק בהסתברות קבועה p. ידוע שאם היא משחקת שלושה משחקים, ההסתברות שתנצח בכולם היא 0.064. מהי ההסתברות שתנצח בדיוק ב-2 משחקים מתוך ה-3?&rlm;",
        options: ["0.288", "0.384", "0.192", "0.096"],
        correctAnswer: 0,
        hint: "ההסתברות ל-3 ניצחונות רצופים בעץ היא p בשלישית. מצאו את p (שורש שלישי של 0.064 הוא 0.4). לאחר מכן חשבו את הענפים המייצגים שני ניצחונות והפסד אחד.",
        solution_steps: [
            { verbal_explanation: "בניית משוואה להסתברות של ענף הניצחון המושלם לאורך שלושה משחקים רצופים.", math_expression: "p^{3} = 0.064" },
            { verbal_explanation: "הוצאת שורש שלישי למציאת המקדם הבסיסי של פונקציית ההצלחה למשחק יחיד.", math_expression: "p = \\sqrt[3]{0.064} = 0.4" },
            { verbal_explanation: "קביעת ההסתברות המשלימה לכישלון במשחק בודד.", math_expression: "q = 1 - p = 1 - 0.4 = 0.6" },
            { verbal_explanation: "הגדרת הפונקציה לניצחון בדיוק בשני משחקים. ישנם שלושה ענפים שונים בעץ המקיימים זאת.", math_expression: "P(k=2) = 3 \\times p^{2} \\times q" },
            { verbal_explanation: "הצבת הערכים המחושבים בתוך המסלולים האפשריים.", math_expression: "P(k=2) = 3 \\times (0.4)^{2} \\times 0.6" },
            { verbal_explanation: "ביצוע העלאה בריבוע והכפלות.", math_expression: "P(k=2) = 3 \\times 0.16 \\times 0.6 = 0.48 \\times 0.6" },
            { verbal_explanation: "קבלת פתרון אריתמטי מוחלט.", math_expression: "0.288" }
        ],
        final_answer: "0.288"
    },
    {
        topic: "probability_571",
        subTopic: "דיאגרמות עץ רב-שלביות והסתברות מורכבת",
        question_text: "עץ החלטות נבנה עבור צלף היורה שתי יריות. ההסתברות לפגוע ביריה הראשונה היא 0.8. אם פגע, ההסתברות לפגוע בשנייה עולה ל-0.9. אם החטיא בראשונה, ההסתברות לפגוע בשנייה יורדת ל-0.5. ידוע שהצלף פגע בדיוק ירייה אחת מתוך השתיים. מה ההסתברות שהייתה זו הירייה השנייה?&rlm;",
        options: ["5 : 9", "1 : 10", "4 : 9", "1 : 5"],
        correctAnswer: 0,
        hint: "המרחב המצומצם הוא הענפים המניבים 'בדיוק פגיעה אחת' (פגע-החטיא, החטיא-פגע). חשבו את ההסתברות של שניהם, וחלקו את הענף שבו הפגיעה היא השנייה בסכום שניהם.",
        solution_steps: [
            { verbal_explanation: "הגדרת ההסתברויות הראשוניות לשלב הירייה הראשון.", math_expression: "P(A_{1}) = 0.8 \\quad , \\quad P(A_{1}') = 0.2" },
            { verbal_explanation: "הגדרת ההסתברויות המותניות לשלב השני המשתנות בהתאם לביצוע בשלב הראשון.", math_expression: "P(A_{2}'|A_{1}) = 0.1 \\quad , \\quad P(A_{2}|A_{1}') = 0.5" },
            { verbal_explanation: "חישוב הענף המייצג פגיעה מוקדמת והחטאה מאוחרת.", math_expression: "P(A_{1} \\cap A_{2}') = 0.8 \\times 0.1 = 0.08" },
            { verbal_explanation: "חישוב הענף המייצג החטאה מוקדמת ופגיעה מאוחרת המפצה עליה.", math_expression: "P(A_{1}' \\cap A_{2}) = 0.2 \\times 0.5 = 0.10" },
            { verbal_explanation: "סכימת שני הענפים המרכיבים יחד את המאורע 'בדיוק פגיעה אחת'.", math_expression: "P(S) = 0.08 + 0.10 = 0.18" },
            { verbal_explanation: "יישום נוסחת ההסתברות המותנית על פי הבקשה לאיתור מקור ההצלחה.", math_expression: "P(A_{2} | S) = \\dfrac{P(A_{1}' \\cap A_{2})}{P(S)}" },
            { verbal_explanation: "הצבת הערכים המחושבים וצמצום למבנה של שבר רגיל.", math_expression: "\\dfrac{0.10}{0.18} = \\dfrac{10}{18} = \\dfrac{5}{9}" }
        ],
        final_answer: "5 : 9"
    },
    {
        topic: "probability_571",
        subTopic: "דיאגרמות עץ רב-שלביות והסתברות מורכבת",
        question_text: "בארנק יש 3 מטבעות של 10 שקלים ו-x מטבעות של 5 שקלים. מוציאים באקראי מטבע אחד ומחזירים. לאחר מכן מוציאים מטבע נוסף. ההסתברות להוציא שני מטבעות שונים זה מזה היא 0.32. מצאו את x (בהנחה ש-x גדול מ-3).&rlm;",
        options: ["12", "7", "5", "8"],
        correctAnswer: 0,
        hint: "מכיוון שזו הוצאה עם החזרה, המכנה לא משתנה. ההסתברות היא 2 כפול ההסתברות לראשון כפול ההסתברות לשני. בנו משוואה ב-x והשוו ל-0.32.",
        solution_steps: [
            { verbal_explanation: "הגדרת סך כל המטבעות בקבוצה כמכנה משותף לכלל פעולות ההסתברות הבאות.", math_expression: "n = x + 3" },
            { verbal_explanation: "קביעת ההסתברות למטבעות שונים כסכום שני ענפים צולבים בדיאגרמת העץ המחזורית.", math_expression: "2 \\times \\dfrac{3}{x + 3} \\times \\dfrac{x}{x + 3} = 0.32" },
            { verbal_explanation: "הכפלת המונה ואיחוד המכנה ליצירת משוואה שברית יחידה.", math_expression: "\\dfrac{6x}{(x + 3)^{2}} = 0.32" },
            { verbal_explanation: "העברת המכנה באלכסון ופתיחתו בהתאם לחוקי כפל מקוצר של ריבוע.", math_expression: "6x = 0.32(x^{2} + 6x + 9)" },
            { verbal_explanation: "פתיחת סוגריים וכינוס לפולינום ריבועי מסודר השווה לאפס לחלוטין.", math_expression: "0.32x^{2} + 1.92x - 6x + 2.88 = 0 \\Rightarrow 0.32x^{2} - 4.08x + 2.88 = 0" },
            { verbal_explanation: "שימוש בנוסחת השורשים מוצא שני ערכים אפשריים עבור כמות המטבעות.", math_expression: "x_{1} = 12 \\quad , \\quad x_{2} = 0.75" },
            { verbal_explanation: "פסילת התוצאה השנייה עקב הגדרתה כשבר וללא עמידה בתנאי המינימום שצוין בבעיה.", math_expression: "x = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "probability_571",
        subTopic: "דיאגרמות עץ רב-שלביות והסתברות מורכבת",
        question_text: "קוד סודי מורכב מ-3 ספרות הנבחרות באקראי מ-0 עד 9, עם החזרה וסיכויים שווים לכל ספרה. מהי ההסתברות שהקוד מכיל בדיוק פעמיים את הספרה 7?&rlm;",
        options: ["0.027", "0.009", "0.081", "0.03"],
        correctAnswer: 0,
        hint: "זהו עץ של 3 שלבים. ישנם 3 ענפים שבהם יש בדיוק פעמיים 7 (7-7-אחר, 7-אחר-7, אחר-7-7). חשבו את ההסתברות של ענף אחד והכפילו ב-3.",
        solution_steps: [
            { verbal_explanation: "קביעת ההסתברות להצלחה נקודתית בחירת הספרה הספציפית במקרה בודד מתוך עשר אפשרויות.", math_expression: "p = \\dfrac{1}{10} = 0.1" },
            { verbal_explanation: "קביעת ההסתברות לכישלון נקודתי בו כל ספרה אחרת נבחרת.", math_expression: "q = \\dfrac{9}{10} = 0.9" },
            { verbal_explanation: "חישוב הסתברות לענף אחד המייצג בדיוק שתי הצלחות ברצף בסוף ואחת בתחילתו או להיפך.", math_expression: "P_{1} = 0.1 \\times 0.1 \\times 0.9 = 0.009" },
            { verbal_explanation: "הכרה בכך שישנם שלושה מסלולים שונים בדיאגרמה המניבים את אותה התוצאה במדויק מבחינת הרכבה.", math_expression: "c = 3" },
            { verbal_explanation: "הכפלת הסתברות הענף במספר המסלולים להשגת ההסתברות הכוללת והמלאה.", math_expression: "P(T) = 3 \\times 0.009" },
            { verbal_explanation: "הצגת התוצאה הסופית והמקורבת.", math_expression: "0.027" }
        ],
        final_answer: "0.027"
    },
    {
        topic: "probability_571",
        subTopic: "דיאגרמות עץ רב-שלביות והסתברות מורכבת",
        question_text: "משחקים משחק בעל שני שלבים בלבד. בשלב א' ההסתברות להצליח היא 0.4. אם מצליחים, עוברים לשלב ב' שבו ההסתברות להצלחה היא 0.6. אם נכשלים בשלב א', מקבלים הזדמנות לשלב ב' קל יותר שבו ההסתברות להצלחה היא 0.8. מהי ההסתברות להצליח בדיוק בשלב אחד מתוך השניים?&rlm;",
        options: ["0.64", "0.48", "0.52", "0.72"],
        correctAnswer: 0,
        hint: "המקרים הם הצלחה וכישלון, או כישלון והצלחה. חשבו את ההסתברויות לכל אחד מהמסלולים וחברו אותן יחד.",
        solution_steps: [
            { verbal_explanation: "זיהוי הענף הראשון בדיאגרמה: הצלחה בשלב המוקדם וכישלון בשלב המאוחר של המשחק.", math_expression: "P_{1} = 0.4 \\times (1 - 0.6) = 0.4 \\times 0.4" },
            { verbal_explanation: "חישוב תוצאת הענף הראשון והשמירתה.", math_expression: "P_{1} = 0.16" },
            { verbal_explanation: "זיהוי הענף השני בעץ: כישלון בשלב המוקדם והצלחה בשלב החלופי שנקבע עבורו.", math_expression: "P_{2} = (1 - 0.4) \\times 0.8 = 0.6 \\times 0.8" },
            { verbal_explanation: "חישוב תוצאת הענף השני במורד העץ.", math_expression: "P_{2} = 0.48" },
            { verbal_explanation: "חיבור שני הענפים (מאורעות זרים לחלוטין) המרכיבים את המאורע השלם המבוקש.", math_expression: "P(T) = P_{1} + P_{2} = 0.16 + 0.48" },
            { verbal_explanation: "סיכום סופי של האריתמטיקה.", math_expression: "0.64" }
        ],
        final_answer: "0.64"
    },
    {
        topic: "probability_571",
        subTopic: "דיאגרמות עץ רב-שלביות והסתברות מורכבת",
        question_text: "למכונת ייצור יש שני רכיבים קריטיים שפועלים באופן בלתי תלוי. ההסתברות שרכיב א' יתקלקל ביום עבודה היא 0.1. ההסתברות שרכיב ב' יתקלקל היא 0.2. המכונה מפסיקה לעבוד רק אם שני הרכיבים מתקלקלים באותו יום. מה ההסתברות שהמכונה תמשיך לעבוד בסוף היום?&rlm;",
        options: ["0.98", "0.9", "0.8", "0.72"],
        correctAnswer: 0,
        hint: "ההסתברות שהמכונה תפסיק לעבוד היא המכפלה של ההסתברויות לקלקול (כי הם בלתי תלויים). ההסתברות שתמשיך היא המאורע המשלים.",
        solution_steps: [
            { verbal_explanation: "הגדרת ההסתברויות לתקלה בכל רכיב באופן מבודד ובלתי תלוי כנתון בבעיה.", math_expression: "P(A) = 0.1 \\quad , \\quad P(B) = 0.2" },
            { verbal_explanation: "חישוב ההסתברות לקריסה כללית המצריכה כשל כפול וסימולטני בשניהם יחד.", math_expression: "P(C) = P(A) \\times P(B)" },
            { verbal_explanation: "הצבת הנתונים לחישוב הקריסה.", math_expression: "P(C) = 0.1 \\times 0.2 = 0.02" },
            { verbal_explanation: "הבנה שהמשך עבודה תקין הוא המאורע המשלים לקריסה כללית של המערכת.", math_expression: "P(W) = 1 - P(C)" },
            { verbal_explanation: "הצבת הערכים המחושבים לחוק המאורע המשלים הסטנדרטי.", math_expression: "P(W) = 1 - 0.02" },
            { verbal_explanation: "סגירת התשובה העשרונית כהלכה.", math_expression: "0.98" }
        ],
        final_answer: "0.98"
    },
    {
        topic: "probability_571",
        subTopic: "דיאגרמות עץ רב-שלביות והסתברות מורכבת",
        question_text: "קובייה הוגנת מוטלת 3 פעמים ברצף. נגדיר הצלחה כקבלת המספר 6. מה ההסתברות לקבל לפחות הצלחה אחת בשלוש ההטלות?&rlm;",
        options: ["91 : 216", "1 : 216", "125 : 216", "1 : 2"],
        correctAnswer: 0,
        hint: "ההסתברות ל'לפחות פעם אחת' שווה ל-1 פחות ההסתברות ל'אף פעם' (כלומר, 3 כישלונות ברצף על גבי העץ).",
        solution_steps: [
            { verbal_explanation: "הגדרת ההסתברות לכישלון יחידני בניסוי הנתון (כל תוצאה שאינה שש מתוך אפשרויות הקובייה).", math_expression: "q = \\dfrac{5}{6}" },
            { verbal_explanation: "בניית ההסתברות לרצף של שלושה כישלונות רצופים וללא הפרעות לאורך ענף יחיד בעץ.", math_expression: "P(0) = q^{3} = (\\dfrac{5}{6})^{3}" },
            { verbal_explanation: "ביצוע העלאה בחזקה למונה ולמכנה כאחד במקביל.", math_expression: "P(0) = \\dfrac{125}{216}" },
            { verbal_explanation: "הפעלת חוק המאורע המשלים לקבלת איחוד כל שאר האפשרויות הקיימות בפיזור נרחב.", math_expression: "P(\\geq 1) = 1 - P(0)" },
            { verbal_explanation: "הצבת השבר בתוך הנוסחה המחסרת.", math_expression: "P(\\geq 1) = 1 - \\dfrac{125}{216}" },
            { verbal_explanation: "ביצוע החיסור בעזרת מכנה משותף של מאתיים ושש עשרה להשגת התוצאה המוחלטת.", math_expression: "\\dfrac{216 - 125}{216} = \\dfrac{91}{216}" }
        ],
        final_answer: "91 : 216"
    },
    {
        topic: "probability_571",
        subTopic: "דיאגרמות עץ רב-שלביות והסתברות מורכבת",
        question_text: "בכד יש 3 כדורים לבנים ו-x כדורים שחורים. מוציאים באקראי שני כדורים עם החזרה. ההסתברות ששני הכדורים לבנים היא 1/4. מצאו את מספר הכדורים השחורים x.&rlm;",
        options: ["3", "4", "2", "6"],
        correctAnswer: 0,
        hint: "ההסתברות ללבן בהוצאה בודדת היא 3 חלקי הסך הכל. כיוון שיש החזרה, מכפילים את השבר בעצמו ומשווים לרבע.",
        solution_steps: [
            { verbal_explanation: "הגדרת סך כל האלמנטים המרכיבים את המרחב המדגמי הפנימי בכד המדובר כאמצעי עזר.", math_expression: "n = 3 + x" },
            { verbal_explanation: "כתיבת ההסתברות הבסיסית להוצאת כדור לבן בניסיון בודד ואקראי.", math_expression: "P(W) = \\dfrac{3}{3 + x}" },
            { verbal_explanation: "מאחר וישנה החזרה, הניסויים בלתי תלויים. ההסתברות לרצף היא העלאה בריבוע של הנתון.", math_expression: "P(W \\cap W) = (\\dfrac{3}{3 + x})^{2} = \\dfrac{1}{4}" },
            { verbal_explanation: "הוצאת שורש ריבועי משני צידי המשוואה כדי להקל על החישוב וסילוק החזקה כליל.", math_expression: "\\dfrac{3}{3 + x} = \\dfrac{1}{2}" },
            { verbal_explanation: "ביצוע כפל אלכסוני בין אגפי המשוואה החדשה.", math_expression: "6 = 3 + x" },
            { verbal_explanation: "חילוץ המשתנה המבוקש המייצג את הכמות החסרה בכד.", math_expression: "x = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "probability_571",
        subTopic: "דיאגרמות עץ רב-שלביות והסתברות מורכבת",
        question_text: "ישנם שני סביבונים. סביבון א' מראה את הספרות 1, 2, 3 בסיכוי שווה. סביבון ב' מראה את הספרות 2, 3, 4 בסיכוי שווה. מסובבים כל אחד פעם אחת. מה ההסתברות שסכום התוצאות יהיה בדיוק 5?&rlm;",
        options: ["1 : 3", "2 : 9", "4 : 9", "1 : 6"],
        correctAnswer: 0,
        hint: "כתבו את כל הצירופים האפשריים שנותנים סכום 5. לכל צירוף יש הסתברות של (שליש כפול שליש). חברו את ההסתברויות של כל הצירופים.",
        solution_steps: [
            { verbal_explanation: "הגדרת ההסתברות לכל תוצאה בודדת בכל אחד מהסביבונים כאירוע אחיד.", math_expression: "p = \\dfrac{1}{3}" },
            { verbal_explanation: "איתור הצירוף הראשון שסכומו עומד בדרישה (אחת מהראשון וארבע מהשני).", math_expression: "P(1 \\cap 4) = \\dfrac{1}{3} \\times \\dfrac{1}{3} = \\dfrac{1}{9}" },
            { verbal_explanation: "איתור הצירוף השני העומד בתנאי התרגיל (שתיים מהראשון ושלוש מהשני).", math_expression: "P(2 \\cap 3) = \\dfrac{1}{9}" },
            { verbal_explanation: "איתור הצירוף השלישי העונה לדרישה (שלוש מהראשון ושתיים מהשני).", math_expression: "P(3 \\cap 2) = \\dfrac{1}{9}" },
            { verbal_explanation: "סכימת כלל הענפים בדיאגרמת המצבים שמרכיבים את המאורע הנדרש.", math_expression: "P(S=5) = \\dfrac{1}{9} + \\dfrac{1}{9} + \\dfrac{1}{9} = \\dfrac{3}{9}" },
            { verbal_explanation: "צמצום השבר לתוצאה המקובלת.", math_expression: "\\dfrac{1}{3}" }
        ],
        final_answer: "1 : 3"
    },

    // ==========================================
    // תת נושא 3: התפלגות בינומית בסיסית ורב-שלבית (ברנולי) (10 שאלות)
    // ==========================================

    {
        topic: "probability_571",
        subTopic: "התפלגות בינומית בסיסית ורב-שלבית (ברנולי)",
        question_text: "במפעל לייצור נורות, ההסתברות שנורה תקולה היא 0.1. בוחרים מדגם אקראי של 5 נורות לבדיקה. מה ההסתברות שבמדגם תהיה בדיוק נורה אחת תקולה?&rlm;",
        options: ["0.328", "0.0729", "0.4095", "0.5"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת ברנולי. ההסתברות היא מספר האפשרויות (5 בחר 1) כפול הסתברות ההצלחה בחזקת ההצלחות כפול הסתברות הכישלון בחזקת הכישלונות.",
        solution_steps: [
            { verbal_explanation: "הגדרת מאפייני ניסוי ברנולי: מספר הניסויים, הסתברות ההצלחה (תקלה) ומספר ההצלחות המבוקש.", math_expression: "n = 5 \\quad , \\quad k = 1 \\quad , \\quad p = 0.1" },
            { verbal_explanation: "הצבת הנתונים המדויקים מן התרגיל לתוך התבנית של נוסחת ברנולי.", math_expression: "P(1) = \\binom{5}{1} (0.1)^{1} (0.9)^{4}" },
            { verbal_explanation: "חישוב המקדם הבינומי הקובע את מספר האפשרויות למיקום התקלה ברצף הניסויים.", math_expression: "\\binom{5}{1} = 5" },
            { verbal_explanation: "חישוב החזקות והמכפלות המהוות את ההסתברות הבסיסית להתרחשות.", math_expression: "P(1) = 5 \\times 0.1 \\times 0.6561" },
            { verbal_explanation: "מכפלה סופית להשגת התוצאה המושלמת בערך עשרוני.", math_expression: "P(1) = 0.5 \\times 0.6561 = 0.32805 \\approx 0.328" }
        ],
        final_answer: "0.328"
    },
    {
        topic: "probability_571",
        subTopic: "התפלגות בינומית בסיסית ורב-שלבית (ברנולי)",
        question_text: "צלף פוגע במטרה בהסתברות קבועה p. הראו שההסתברות שהוא יפגע בדיוק פעמיים מתוך 4 יריות היא מקסימלית כאשר \\( p = 0.5 \\), וחשבו הסתברות זו עבור אותו ערך.&rlm;",
        options: ["0.375", "0.25", "0.5", "0.3125"],
        correctAnswer: 0,
        hint: "הציבו את הפרמטרים בנוסחת ברנולי. המקדם הבינומי עבור 4 בחר 2 הוא 6.",
        solution_steps: [
            { verbal_explanation: "הגדרת מרכיבי ניסוי ברנולי תחת הנחת פונקציית המקסימום הסימטרית המצויה בבעיה.", math_expression: "n = 4 \\quad , \\quad k = 2 \\quad , \\quad p = 0.5" },
            { verbal_explanation: "הצבת המרכיבים לתבנית ברנולי לבדיקת התוצאה החישובית הטהורה.", math_expression: "P(2) = \\binom{4}{2} (0.5)^{2} (0.5)^{2}" },
            { verbal_explanation: "חישוב המקדם הבינומי מתוך חוק העצרת או משולש רלוונטי.", math_expression: "\\binom{4}{2} = \\dfrac{4 \\times 3}{2 \\times 1} = 6" },
            { verbal_explanation: "איחוד החזקות עקב בסיסים זהים לשם הפשטות האלגברית העוקבת.", math_expression: "P(2) = 6 \\times (0.5)^{4}" },
            { verbal_explanation: "חישוב תוצאת החזקה השלמה והצבתה בהכפלה המרכזית.", math_expression: "P(2) = 6 \\times 0.0625" },
            { verbal_explanation: "סיכום התוצאה למבנה עשרוני תקני המוגש כתשובה מסכמת.", math_expression: "0.375" }
        ],
        final_answer: "0.375"
    },
    {
        topic: "probability_571",
        subTopic: "התפלגות בינומית בסיסית ורב-שלבית (ברנולי)",
        question_text: "זורקים מטבע הוגן לחלוטין 6 פעמים ברצף. מה ההסתברות לקבל 'עץ' לפחות פעם אחת לאורך כל סדרת הזריקות?&rlm;",
        options: ["63 : 64", "31 : 32", "1 : 64", "15 : 16"],
        correctAnswer: 0,
        hint: "מאורע 'לפחות פעם אחת' הוא המאורע המשלים ל'אף פעם לא' (אפס הצלחות). חסכו חישובים ארוכים על ידי מציאת המשלים.",
        solution_steps: [
            { verbal_explanation: "הגדרת ההסתברות הקבועה לתוצאה במטבע הוגן והבלתי מוטה סטטיסטית.", math_expression: "p = 0.5 \\quad , \\quad q = 0.5" },
            { verbal_explanation: "בניית משוואת ברנולי למקרה הקיצון היחידי בו אין כלל עצי פרי במהלך ההטלות המבוצעות.", math_expression: "P(0) = \\binom{6}{0} (0.5)^{0} (0.5)^{6}" },
            { verbal_explanation: "חישוב המרכיבים המאופסים השווים לאחת ומותירים חזקה אחת טהורה.", math_expression: "P(0) = 1 \\times 1 \\times (0.5)^{6} = \\dfrac{1}{64}" },
            { verbal_explanation: "יישום חוק המאורע המשלים לכיסוי שאר מרחב המדגם בצורה יעילה.", math_expression: "P(x \\geq 1) = 1 - P(0)" },
            { verbal_explanation: "הצבת השבר וביצוע החיסור לסגירת התרגיל.", math_expression: "1 - \\dfrac{1}{64} = \\dfrac{63}{64}" }
        ],
        final_answer: "63 : 64"
    },
    {
        topic: "probability_571",
        subTopic: "התפלגות בינומית בסיסית ורב-שלבית (ברנולי)",
        question_text: "שחקן שחמט בועט 3 פנדלים במשחק אימון (אל תשאלו למה). ההסתברות שיכניס גול בבעיטה בודדת היא 0.8. ידוע שהוא הכניס לפחות גול אחד. מה ההסתברות שהוא הכניס בדיוק 3 גולים?&rlm;",
        options: ["0.516", "0.512", "0.6", "0.8"],
        correctAnswer: 0,
        hint: "זוהי הסתברות מותנית בשילוב ברנולי. חשבו את ההסתברות ל-3 הצלחות. חשבו את ההסתברות ל'לפחות 1'. חלקו את הראשונה בשנייה.",
        solution_steps: [
            { verbal_explanation: "חישוב ההסתברות להצלחה מלאה בכל הניסיונות דרך ברנולי מקוצר ללא מקדם מיוחד.", math_expression: "P(3) = 0.8^{3} = 0.512" },
            { verbal_explanation: "חישוב ההסתברות לכישלון מוחלט ומוחץ בכל הניסיונות (ברנולי קיצוני תחתון).", math_expression: "P(0) = 0.2^{3} = 0.008" },
            { verbal_explanation: "חישוב מרחב המדגם המצומצם, בעזרת המאורע המשלים לכישלון מוחלט שכבר חושב.", math_expression: "P(x \\geq 1) = 1 - P(0) = 1 - 0.008 = 0.992" },
            { verbal_explanation: "הכנת נוסחת ההתניה המשולבת המציבה את ההצלחה המלאה מעל ההסתברות הכוללת.", math_expression: "P(3 | x \\geq 1) = \\dfrac{P(3)}{P(x \\geq 1)}" },
            { verbal_explanation: "הצבת הנתונים וחלוקה לקבלת הערך העשרוני המוחלט של ההתניה.", math_expression: "\\dfrac{0.512}{0.992} \\approx 0.5161" }
        ],
        final_answer: "0.516"
    },
    {
        topic: "probability_571",
        subTopic: "התפלגות בינומית בסיסית ורב-שלבית (ברנולי)",
        question_text: "במבחן אמריקאי ישנן 10 שאלות, ולכל שאלה 4 תשובות אפשריות (רק אחת נכונה). תלמיד מנחש את כל התשובות באקראי. כתבו את הביטוי להסתברות שיענה נכון על בדיוק 2 שאלות מתוך המבחן כלו.&rlm;",
        options: ["45 × (0.25)² × (0.75)⁸", "10 × (0.25)² × (0.75)⁸", "45 × (0.75)² × (0.25)⁸", "0.25² × 0.75⁸"],
        correctAnswer: 0,
        hint: "הסתברות להצלחה בניחוש היא 1/4. כמות הניסויים היא 10. השתמשו בברנולי עם המקדם הבינומי (10 בחר 2).",
        solution_steps: [
            { verbal_explanation: "קביעת ההסתברות הבסיסית להצלחה בניחוש עיוור מתוך מספר אפשרויות שוות סיכוי במציאות.", math_expression: "p = \\dfrac{1}{4} = 0.25" },
            { verbal_explanation: "קביעת הגדרות הניסוי הראשיות למשוואה המייצגות כמות שאלות וכמות הצלחות מבוקשת.", math_expression: "n = 10 \\quad , \\quad k = 2" },
            { verbal_explanation: "הצבת כלל הנתונים שנאספו אל תוך נוסחת ברנולי רשמית.", math_expression: "P(2) = \\binom{10}{2} (0.25)^{2} (0.75)^{10 - 2}" },
            { verbal_explanation: "חישוב המקדם הבינומי המגדיר את מספר האפשרויות הסטטיסטי לפיזור שתי ההצלחות לאורך המבחן כולו.", math_expression: "\\binom{10}{2} = \\dfrac{10 \\times 9}{2 \\times 1} = 45" },
            { verbal_explanation: "שילוב המקדם במשוואה הסופית המבוקשת ללא פתרון מעמיק נוסף כפי שמבקשות החלופות השונות.", math_expression: "45 \\times (0.25)^{2} \\times (0.75)^{8}" }
        ],
        final_answer: "45 × (0.25)² × (0.75)⁸"
    },
    {
        topic: "probability_571",
        subTopic: "התפלגות בינומית בסיסית ורב-שלבית (ברנולי)",
        question_text: "קשת יורה למטרה מספר פעמים. ההסתברות לפגוע בירייה בודדת היא p. ידוע שהיחס בין ההסתברות לפגוע בדיוק ב-3 יריות מתוך 4 לבין ההסתברות לפגוע בדיוק ב-2 יריות מתוך 4 שווה ל-2. מצאו את ערכו של p.&rlm;",
        options: ["0.75", "0.6", "0.8", "0.5"],
        correctAnswer: 0,
        hint: "בנו משוואה של יחס בין שני ביטויי ברנולי והשוו ל-2. המקדמים הבינומיים הם 4 ו-6 בהתאמה. צמצמו חזקות זהות של p ושל המשלים שלו.",
        solution_steps: [
            { verbal_explanation: "בניית משוואת היחס המבוססת על שתי תוצאות שונות מנוסחת ברנולי.", math_expression: "\\dfrac{\\binom{4}{3} p^{3} (1-p)^{1}}{\\binom{4}{2} p^{2} (1-p)^{2}} = 2" },
            { verbal_explanation: "חישוב המקדמים הבינומיים והצבתם במשוואה כדי לאפשר עבודה מתמטית חלקה.", math_expression: "\\dfrac{4 p^{3} (1-p)}{6 p^{2} (1-p)^{2}} = 2" },
            { verbal_explanation: "צמצום חזקות משותפות של פונקציית ההצלחה והכישלון בין המונה למכנה בתשומת לב רבה להפרשים.", math_expression: "\\dfrac{4 p}{6 (1-p)} = 2" },
            { verbal_explanation: "צמצום השבר המספרי לשני שליש ופתיחת כפל בהצלבה לסידור אלגברי מורחב של המשוואה החד ממדית.", math_expression: "\\dfrac{2 p}{3 (1-p)} = 2 \\Rightarrow 2p = 6(1 - p)" },
            { verbal_explanation: "פתיחת סוגריים וכינוס המשתנים לצד אחד בלבד לשם בידוד סופי של מקדם ההצלחה הבסיסי באחוזים.", math_expression: "2p = 6 - 6p \\Rightarrow 8p = 6" },
            { verbal_explanation: "חלוקה להשגת התוצאה המספרית הסופית הברורה.", math_expression: "p = \\dfrac{6}{8} = 0.75" }
        ],
        final_answer: "0.75"
    },
    {
        topic: "probability_571",
        subTopic: "התפלגות בינומית בסיסית ורב-שלבית (ברנולי)",
        question_text: "מטילים קובייה הוגנת 4 פעמים. מהי ההסתברות לקבל מספר זוגי לכל היותר פעם אחת לאורך כל הניסוי?&rlm;",
        options: ["5 : 16", "1 : 16", "1 : 4", "3 : 8"],
        correctAnswer: 0,
        hint: "מאורע 'לכל היותר פעם אחת' מורכב מחיבור ההסתברויות לקבלת 'אפס פעמים' פלוס 'פעם אחת בדיוק'. חשבו כל אחד מהם בנפרד בעזרת ברנולי וחברו.",
        solution_steps: [
            { verbal_explanation: "הבנת ההסתברות לקבל מספר זוגי בהטלה בודדת ואקראית של קובייה תקנית שאינה מוטה כלל לטובת שום צד.", math_expression: "p = 0.5 \\quad , \\quad n = 4" },
            { verbal_explanation: "חישוב המקרה הראשון העונה להגדרת התנאי המחמיר: התאפסות מוחלטת בברנולי.", math_expression: "P(0) = \\binom{4}{0} (0.5)^{0} (0.5)^{4} = 0.0625" },
            { verbal_explanation: "חישוב המקרה השני העונה להגדרת התנאי המכיל שורש הצלחה יחיד בניסוי כולו לאורכו הרציף והממושך למדי.", math_expression: "P(1) = \\binom{4}{1} (0.5)^{1} (0.5)^{3} = 4 \\times 0.0625 = 0.25" },
            { verbal_explanation: "סכימת שני המקרים הזרים למציאת ההסתברות הכוללת והמלאה העונה על הדרישה המילולית של השאלה באופן חותך וחד משמעי.", math_expression: "P(x \\leq 1) = P(0) + P(1) = 0.0625 + 0.25 = 0.3125" },
            { verbal_explanation: "המרת המספר העשרוני לשבר רגיל המתאים לחלופות המוצגות בגרסה הסופית.", math_expression: "0.3125 = \\dfrac{5}{16}" }
        ],
        final_answer: "5 : 16"
    },
    {
        topic: "probability_571",
        subTopic: "התפלגות בינומית בסיסית ורב-שלבית (ברנולי)",
        question_text: "בחממה נזרעו זרעים. ידוע שההסתברות שזרע בודד ינבוט היא 0.9. זרעו 3 עציצים נפרדים, ובכל עציץ זרעו 2 זרעים בלבד. עציץ נחשב 'מוצלח' אם לפחות זרע אחד מתוכו נבט. מה ההסתברות שבדיוק 2 מתוך 3 העציצים בחממה יהיו מוצלחים?&rlm;",
        options: ["0.0294", "0.0098", "0.99", "0.97"],
        correctAnswer: 0,
        hint: "זהו ניסוי דו-שלבי מורכב. שלב א': מצאו את ההסתברות שעציץ בודד מוצלח (משלים לכישלון כפול של שני הזרעים בו). שלב ב': בצעו ניסוי ברנולי נוסף בו כל עציץ הוא ניסוי בפני עצמו.",
        solution_steps: [
            { verbal_explanation: "חישוב ההסתברות שבעציץ בודד אף זרע לא ינבוט, המהווה כישלון כפול נקודתי.", math_expression: "P(F) = (1 - 0.9)^{2} = 0.1^{2} = 0.01" },
            { verbal_explanation: "שימוש בחוק המשלים כדי למצוא את ההסתברות שעציץ יהיה מוצלח, המהווה את ההסתברות הבסיסית החדשה לניסוי הרחב.", math_expression: "p = 1 - 0.01 = 0.99" },
            { verbal_explanation: "הגדרת פרמטרים לניסוי ברנולי הראשי העוסק בעציצים ולא בזרעים.", math_expression: "n = 3 \\quad , \\quad k = 2" },
            { verbal_explanation: "הצבת הנתונים המחושבים בנוסחת ברנולי מקיפה על המרחב השלם.", math_expression: "P(2) = \\binom{3}{2} (0.99)^{2} (0.01)^{1}" },
            { verbal_explanation: "חישוב המקדם והחזקות הפנימיות המספריות בצורה נפרדת.", math_expression: "P(2) = 3 \\times 0.9801 \\times 0.01" },
            { verbal_explanation: "הכפלה סופית להשגת התוצאה המיוחלת והמוגמרת כליל.", math_expression: "P(2) = 0.029403 \\approx 0.0294" }
        ],
        final_answer: "0.0294"
    },
    {
        topic: "probability_571",
        subTopic: "התפלגות בינומית בסיסית ורב-שלבית (ברנולי)",
        question_text: "קבוצת פריטים מיוצרת במפעל. ההסתברות לפריט פגום היא p קבוע. בוחרים 5 פריטים לבדיקה מדגמית. ידוע שההסתברות שכל 5 הפריטים יהיו תקינים לחלוטין היא 0.03125. מהו שיעור הפגומים p המיוצר במפעל?&rlm;",
        options: ["0.5", "0.2", "0.1", "0.4"],
        correctAnswer: 0,
        hint: "הציבו בנוסחת ברנולי: הסתברות ל-0 פגומים מתוך 5. התוצאה היא (אחת פחות p) בחזקת 5. הוציאו שורש חמישי.",
        solution_steps: [
            { verbal_explanation: "הגדרת המשוואה המבוססת על ברנולי למקרה בו יש אפס תקלות במדגם כולו.", math_expression: "\\binom{5}{0} p^{0} (1-p)^{5} = 0.03125" },
            { verbal_explanation: "פישוט המשוואה על ידי הבנה שהמקדם ואפס החזקה שווים לאחת טהורה.", math_expression: "(1-p)^{5} = 0.03125" },
            { verbal_explanation: "הוצאת שורש מסדר חמישי משני הצדדים כדי לחשוף את ההסתברות הפנימית ללא המעריך המכפיל.", math_expression: "1 - p = \\sqrt[5]{0.03125} = 0.5" },
            { verbal_explanation: "חילוץ פשוט של הפרמטר המבוקש בבעיה לאחר שינוי אגפים קל.", math_expression: "p = 0.5" },
            { verbal_explanation: "מסקנה מושלמת.", math_expression: "1=1" }
        ],
        final_answer: "0.5"
    },
    {
        topic: "probability_571",
        subTopic: "התפלגות בינומית בסיסית ורב-שלבית (ברנולי)",
        question_text: "שיעור המעבר במבחן מסוים הוא 80%. בוחרים 5 סטודנטים שניגשו למבחן זה באופן אקראי לחלוטין. מהי ההסתברות שלפחות 4 מהם עברו את המבחן בהצלחה מלאה?&rlm;",
        options: ["0.737", "0.409", "0.327", "0.85"],
        correctAnswer: 0,
        hint: "מאורע 'לפחות 4' כולל בתוכו את האפשרות בדיוק 4 הצלחות, והאפשרות בדיוק 5 הצלחות. חשבו את שתיהן וחברו.",
        solution_steps: [
            { verbal_explanation: "הגדרת תנאי הבעיה וההסתברות הבסיסית להצלחה נתונה של פרט יחיד.", math_expression: "n = 5 \\quad , \\quad p = 0.8" },
            { verbal_explanation: "חישוב המקרה הראשון שעונה לדרישה: בדיוק ארבע הצלחות במדגם מתוך חמש במשוואת הברנולי שלו.", math_expression: "P(4) = \\binom{5}{4} (0.8)^{4} (0.2)^{1}" },
            { verbal_explanation: "פיתוח החישוב.", math_expression: "P(4) = 5 \\times 0.4096 \\times 0.2 = 0.4096" },
            { verbal_explanation: "חישוב המקרה השני שעונה לדרישה: בדיוק חמש הצלחות במדגם מתוך חמש, המהווה הצלחה אבסולוטית ומושלמת.", math_expression: "P(5) = \\binom{5}{5} (0.8)^{5} (0.2)^{0} = 0.32768" },
            { verbal_explanation: "סכימת כלל המקרים שהוצגו כעונים על תנאי השאלה הבסיסיים (מאורעות זרים ולכן חיבור חוקי ולוגי לחלוטין).", math_expression: "P(x \\geq 4) = 0.4096 + 0.32768" },
            { verbal_explanation: "הגעה לסכום המדויק בקירוב אסתטי.", math_expression: "P(x \\geq 4) = 0.73728 \\approx 0.737" }
        ],
        final_answer: "0.737"
    }
];