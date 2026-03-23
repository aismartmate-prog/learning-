const questionsDB = [
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2023, מועד קיץ א'<br>משאית יצאה מעיר א' לעיר ב' במהירות קבועה. לאחר שעתיים של נסיעה, התעכבה המשאית עקב תקלה, ולכן הקטינה את מהירותה ב-20 קמ''ש. המשאית הגיעה לעיר ב' שעה מאוחר יותר מן המתוכנן. המרחק בין הערים הוא 400 ק''מ.<br>א. מצאו את מהירותה המקורית של המשאית.<br>ב. מהו הזמן הכולל של הנסיעה בפועל?&rlm;",
        "options": ["א. 80 קמ''ש ב. 6 שעות", "א. 100 קמ''ש ב. 5 שעות", "א. 60 קמ''ש ב. 7.6 שעות", "א. 80 קמ''ש ב. 5 שעות"],
        "correctAnswer": 0,
        "hint": "בנו משוואה המשווה בין הזמן המתוכנן לבין הזמן בפועל. הזמן המתוכנן שווה לזמן עד התקלה, פלוס זמן העיכוב היחסי, פלוס הזמן הנותר.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את המהירות ההתחלתית במשתנה.", "math_expression": "v" },
            { "verbal_explanation": "נביע את זמן הנסיעה המתוכנן כולו.", "math_expression": "t_1 = \\dfrac{400}{v}" },
            { "verbal_explanation": "נחשב את המרחק שעברה המשאית בשעתיים הראשונות.", "math_expression": "d_1 = 2v" },
            { "verbal_explanation": "נביע את המרחק שנותר להשלמת המסלול.", "math_expression": "d_2 = 400 - 2v" },
            { "verbal_explanation": "נביע את הזמן הנדרש להשלמת המסלול במהירות החדשה והנמוכה.", "math_expression": "t_2 = \\dfrac{400 - 2v}{v - 20}" },
            { "verbal_explanation": "נרכיב משוואת זמנים המשווה את התכנון לפועל בתוספת שעת האיחור.", "math_expression": "\\dfrac{400}{v} + 1 = 2 + \\dfrac{400 - 2v}{v - 20}" },
            { "verbal_explanation": "נחסר שתיים משני האגפים ונסדר את המשוואה.", "math_expression": "\\dfrac{400 - v}{v} = \\dfrac{400 - 2v}{v - 20}" },
            { "verbal_explanation": "נכפול בהצלבה.", "math_expression": "(400 - v)(v - 20) = v(400 - 2v)" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "400v - 8000 - v^{2} + 20v = 400v - 2v^{2}" },
            { "verbal_explanation": "נכנס איברים למשוואה ריבועית.", "math_expression": "v^{2} + 20v - 8000 = 0" },
            { "verbal_explanation": "נפרק לגורמים ונמצא את המהירות.", "math_expression": "(v - 80)(v + 100) = 0 \\Rightarrow v = 80" },
            { "verbal_explanation": "נחשב את הזמן בפועל (התכנון היה 5 שעות, האיחור הוא שעה).", "math_expression": "t = 5 + 1 = 6" }
        ],
        "final_answer": "א. 80 קמ''ש ב. 6 שעות"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2022, מועד מיוחד<br>נתונה סדרה הנדסית אינסופית מתכנסת שסכומה 24. סכום איברי הסדרה הנמצאים במקומות הזוגיים הוא 6.<br>א. מצאו את מנת הסדרה.<br>ב. מצאו את האיבר הראשון.&rlm;",
        "options": ["א. 1/3 ב. 16", "א. 1/4 ב. 18", "א. 1/2 ב. 12", "א. 1/5 ב. 19.2"],
        "correctAnswer": 0,
        "hint": "הסדרה של המקומות הזוגיים היא סדרה הנדסית שבה האיבר הראשון הוא האיבר השני של הסדרה המקורית, והמנה היא ריבוע המנה המקורית.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את משוואת הסכום של הסדרה המקורית כולה.", "math_expression": "\\dfrac{a_1}{1 - q} = 24" },
            { "verbal_explanation": "נרשום את משוואת הסכום עבור סדרת המקומות הזוגיים.", "math_expression": "\\dfrac{a_1 q}{1 - q^{2}} = 6" },
            { "verbal_explanation": "נפרק את המכנה במשוואה השנייה לפי הפרש ריבועים.", "math_expression": "\\dfrac{a_1 q}{(1 - q)(1 + q)} = 6" },
            { "verbal_explanation": "נציב את הביטוי מהמשוואה הראשונה לתוך המשוואה השנייה.", "math_expression": "24 \\times \\dfrac{q}{1 + q} = 6" },
            { "verbal_explanation": "נחלק בשש.", "math_expression": "\\dfrac{4q}{1 + q} = 1" },
            { "verbal_explanation": "נכפול במכנה.", "math_expression": "4q = 1 + q" },
            { "verbal_explanation": "נבודד את המנה.", "math_expression": "3q = 1 \\Rightarrow q = \\dfrac{1}{3}" },
            { "verbal_explanation": "נציב את המנה שמצאנו למשוואת הסכום הראשונה לחילוץ האיבר הראשון.", "math_expression": "\\dfrac{a_1}{1 - \\dfrac{1}{3}} = 24" },
            { "verbal_explanation": "נכפול בשני שלישים.", "math_expression": "a_1 = 24 \\times \\dfrac{2}{3} = 16" }
        ],
        "final_answer": "א. 1/3 ב. 16"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2021, מועד חורף<br>בכד יש כדורים כחולים ולבנים. ההסתברות להוציא כדור כחול היא \\( p \\). מוציאים עם החזרה 3 כדורים. ההסתברות שכולם כחולים שווה ל-0.027.<br>א. מצאו את \\( p \\).<br>ב. מה ההסתברות להוציא בדיוק 2 כדורים כחולים?&rlm;",
        "options": ["א. 0.3 ב. 0.189", "א. 0.27 ב. 0.15", "א. 0.3 ב. 0.09", "א. 0.4 ב. 0.288"],
        "correctAnswer": 0,
        "hint": "כיוון שההוצאה היא עם החזרה, האירועים בלתי תלויים. השתמשו בנוסחת ברנולי (בינום) עבור הסעיף השני.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב משוואה על סמך ההסתברות לשלוש הוצאות רצופות של כדור כחול.", "math_expression": "p^{3} = 0.027" },
            { "verbal_explanation": "נוציא שורש שלישי למציאת ההסתברות הבודדת.", "math_expression": "p = \\sqrt[3]{0.027}" },
            { "verbal_explanation": "נחשב את הערך.", "math_expression": "p = 0.3" },
            { "verbal_explanation": "נחשב את ההסתברות המשלימה (הוצאת כדור לבן).", "math_expression": "1 - p = 1 - 0.3 = 0.7" },
            { "verbal_explanation": "נרשום את נוסחת ברנולי לחישוב שני כחולים מתוך שלושה.", "math_expression": "P_2 = \\binom{3}{2} p^{2} (1 - p)^{1}" },
            { "verbal_explanation": "נחשב את המקדם הבינומי.", "math_expression": "\\binom{3}{2} = 3" },
            { "verbal_explanation": "נציב את הערכים לנוסחה.", "math_expression": "P_2 = 3 \\times (0.3)^{2} \\times 0.7" },
            { "verbal_explanation": "נבצע את המכפלה.", "math_expression": "P_2 = 3 \\times 0.09 \\times 0.7" },
            { "verbal_explanation": "התוצאה הסופית חושבה.", "math_expression": "P_2 = 0.189" }
        ],
        "final_answer": "א. 0.3 ב. 0.189"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"20,130 180,130 60,30\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"60\" y1=\"30\" x2=\"60\" y2=\"130\" stroke=\"#f87171\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/></svg></div><br>בגרות 2020, מועד קיץ א'<br>במשולש ישר זווית, אורך היתר הוא 20. גובה ליתר מחלק אותו לשני קטעים, שאחד מהם ארוך ב-12 מהשני.<br>א. מצאו את אורכי הקטעים שעל היתר.<br>ב. מצאו את אורך הגובה ליתר.&rlm;",
        "options": ["א. 16, 4 ב. 8", "א. 14, 6 ב. 9.16", "א. 15, 5 ב. 8.66", "א. 18, 2 ב. 6"],
        "correctAnswer": 0,
        "hint": "היעזרו במשפט: הגובה ליתר במשולש ישר זווית שווה לממוצע הגיאומטרי של היטלי הניצבים על היתר.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את אורכי שני הקטעים שעל היתר.", "math_expression": "x \\quad , \\quad y" },
            { "verbal_explanation": "נרשום משוואה לסכום הקטעים המרכיבים את היתר השלם.", "math_expression": "x + y = 20" },
            { "verbal_explanation": "נרשום משוואה על סמך ההפרש הנתון בין הקטעים.", "math_expression": "x - y = 12" },
            { "verbal_explanation": "נחבר את שתי המשוואות למציאת המשתנה הראשון.", "math_expression": "2x = 32 \\Rightarrow x = 16" },
            { "verbal_explanation": "נציב למציאת המשתנה השני.", "math_expression": "16 + y = 20 \\Rightarrow y = 4" },
            { "verbal_explanation": "הקטעים הם באורך 16 ו-4.", "math_expression": "x = 16 \\quad , \\quad y = 4" },
            { "verbal_explanation": "נשתמש במשפט הגובה ליתר.", "math_expression": "h^{2} = x \\times y" },
            { "verbal_explanation": "נציב את אורכי הקטעים.", "math_expression": "h^{2} = 16 \\times 4 = 64" },
            { "verbal_explanation": "נוציא שורש למציאת הגובה.", "math_expression": "h = 8" }
        ],
        "final_answer": "א. 16, 4 ב. 8"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"75\" r=\"60\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><polygon points=\"50,40 150,40 120,130\" fill=\"none\" stroke=\"#c5a059\" stroke-width=\"2\"/></svg></div><br>בגרות 2019, מועד קיץ ב'<br>במשולש חסום במעגל שרדיוסו 10. זווית אחת היא בת 60 מעלות וזווית שנייה היא בת 45 מעלות.<br>א. מצאו את אורך הצלע שמול הזווית של ה-60 מעלות.<br>ב. מצאו את אורך הצלע שמול הזווית של ה-45 מעלות.&rlm;",
        "options": ["א. 17.32 ב. 14.14", "א. 15 ב. 12", "א. 20 ב. 17.32", "א. 14.14 ב. 10"],
        "correctAnswer": 0,
        "hint": "השתמשו במשפט הסינוסים המורחב: צלע חלקי סינוס הזווית שממול שווה לפעמיים רדיוס המעגל החוסם.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את משפט הסינוסים במעגל החוסם.", "math_expression": "\\dfrac{a}{\\sin A} = 2R" },
            { "verbal_explanation": "נציב את הנתונים עבור הצלע הראשונה.", "math_expression": "a = 2(10) \\times \\sin(60^{\\circ})" },
            { "verbal_explanation": "נציב את הערך של הפונקציה הטריגונומטרית.", "math_expression": "a = 20 \\times \\dfrac{\\sqrt{3}}{2}" },
            { "verbal_explanation": "נפשט ונקבל את הערך העשרוני המקורב.", "math_expression": "a = 10\\sqrt{3} \\approx 17.32" },
            { "verbal_explanation": "נבצע תהליך זהה עבור הצלע השנייה.", "math_expression": "b = 2(10) \\times \\sin(45^{\\circ})" },
            { "verbal_explanation": "נציב את הערך התואם.", "math_expression": "b = 20 \\times \\dfrac{\\sqrt{2}}{2}" },
            { "verbal_explanation": "נפשט ונקבל את הערך העשרוני של הצלע.", "math_expression": "b = 10\\sqrt{2} \\approx 14.14" }
        ],
        "final_answer": "א. 17.32 ב. 14.14"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2018, מועד חורף<br>נתונה הפונקציה \\( f(x) = \\dfrac{x^{2} - x - 2}{x - 3} \\).<br>א. מצאו את האסימפטוטה האנכית ואת תחום ההגדרה.<br>ב. מצאו את נקודות הקיצון המקומיות של הפונקציה.&rlm;",
        "options": ["א. x≠3, x=3 ב. מקס' (1, 1), מינ' (5, 9)", "א. x≠-3, x=-3 ב. מקס' (-1, 0), מינ' (1, -2)", "א. x≠2, x=2 ב. מקס' (3, 7), מינ' (4, 9)", "א. אין אסימפטוטה ב. מקס' (1, 1)"],
        "correctAnswer": 0,
        "hint": "האסימפטוטה האנכית מאפסת את המכנה. למציאת הקיצון, גזרו את הפונקציה בעזרת כלל המנה והשוו את המונה לאפס.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את תחום ההגדרה מהמכנה.", "math_expression": "x - 3 \\neq 0 \\Rightarrow x \\neq 3" },
            { "verbal_explanation": "הערך המאפס מהווה אסימפטוטה אנכית.", "math_expression": "x = 3" },
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "f'(x) = \\dfrac{(2x - 1)(x - 3) - (x^{2} - x - 2)(1)}{(x - 3)^{2}}" },
            { "verbal_explanation": "נפתח סוגריים במונה.", "math_expression": "f'(x) = \\dfrac{2x^{2} - 7x + 3 - x^{2} + x + 2}{(x - 3)^{2}}" },
            { "verbal_explanation": "נכנס איברים במונה הנגזרת.", "math_expression": "f'(x) = \\dfrac{x^{2} - 6x + 5}{(x - 3)^{2}}" },
            { "verbal_explanation": "נשווה לאפס ונמצא שורשים.", "math_expression": "x^{2} - 6x + 5 = 0 \\Rightarrow (x - 1)(x - 5) = 0" },
            { "verbal_explanation": "השורשים נמצאו.", "math_expression": "x = 1 \\quad , \\quad x = 5" },
            { "verbal_explanation": "נציב את הערך הראשון בפונקציה. סיווג למקסימום נובע ממעבר סימן.", "math_expression": "f(1) = \\dfrac{1 - 1 - 2}{1 - 3} = \\dfrac{-2}{-2} = 1 \\Rightarrow Max" },
            { "verbal_explanation": "נציב את הערך השני בפונקציה. סיווג למינימום נובע ממעבר סימן.", "math_expression": "f(5) = \\dfrac{25 - 5 - 2}{5 - 3} = \\dfrac{18}{2} = 9 \\Rightarrow Min" }
        ],
        "final_answer": "א. x≠3, x=3 ב. מקס' (1, 1), מינ' (5, 9)"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2017, מועד קיץ א'<br>נתונה הפונקציה \\( f(x) = x\\sqrt{12 - x} \\).<br>א. מצאו את תחום ההגדרה.<br>ב. מצאו את נקודת המקסימום המוחלט של הפונקציה.&rlm;",
        "options": ["א. x≤12 ב. (8, 16)", "א. x≥12 ב. (10, 14.14)", "א. כל x ב. (6, 14.7)", "א. 0≤x≤12 ב. (4, 11.3)"],
        "correctAnswer": 0,
        "hint": "תוכן השורש חייב להיות חיובי או אפס. גזרו את הפונקציה בעזרת כלל מכפלה והשוו לאפס.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את תחום ההגדרה מהשורש.", "math_expression": "12 - x \\geq 0 \\Rightarrow x \\leq 12" },
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "f'(x) = 1 \\times \\sqrt{12 - x} + x \\times \\dfrac{-1}{2\\sqrt{12 - x}}" },
            { "verbal_explanation": "ניצור מכנה משותף בנגזרת.", "math_expression": "f'(x) = \\dfrac{2(12 - x) - x}{2\\sqrt{12 - x}}" },
            { "verbal_explanation": "נפשט את המונה.", "math_expression": "f'(x) = \\dfrac{24 - 3x}{2\\sqrt{12 - x}}" },
            { "verbal_explanation": "נשווה את המונה לאפס.", "math_expression": "24 - 3x = 0" },
            { "verbal_explanation": "נפתור עבור המשתנה.", "math_expression": "3x = 24 \\Rightarrow x = 8" },
            { "verbal_explanation": "נציב את הערך בפונקציה למציאת הערך המקסימלי.", "math_expression": "f(8) = 8\\sqrt{12 - 8} = 8\\sqrt{4}" },
            { "verbal_explanation": "נחשב את התוצאה הסופית.", "math_expression": "f(8) = 8 \\times 2 = 16" }
        ],
        "final_answer": "א. x≤12 ב. (8, 16)"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 40 100 Q 70 40 100 100 T 160 100\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/></svg></div><br>בגרות 2016, מועד חורף<br>נתונה הפונקציה \\( f(x) = \\sin(x) + \\cos(x) \\) בתחום \\( 0 \\leq x \\leq \\pi \\).<br>א. מצאו את נקודות החיתוך עם ציר ה-\\( x \\).<br>ב. מצאו את שיעורי נקודת המקסימום המוחלט של הפונקציה בתחום הנתון.&rlm;",
        "options": ["א. (0.75π, 0) ב. (0.25π, 1.414)", "א. (0.5π, 0) ב. (0.5π, 1)", "א. (π, 0) ב. (0, 1)", "א. (0.25π, 0) ב. (0.75π, -1.414)"],
        "correctAnswer": 0,
        "hint": "לחיתוך ציר x השוו לאפס וסדרו משוואת טנגנס. לקיצון גזרו, השוו לאפס, ופתרו בעזרת טנגנס.",
        "solution_steps": [
            { "verbal_explanation": "נשווה לאפס למציאת חיתוך ציר האופק.", "math_expression": "\\sin(x) + \\cos(x) = 0" },
            { "verbal_explanation": "נעביר אגף.", "math_expression": "\\sin(x) = -\\cos(x)" },
            { "verbal_explanation": "נחלק בקוסינוס לקבלת טנגנס.", "math_expression": "\\tan(x) = -1" },
            { "verbal_explanation": "נפתור עבור התחום הנתון.", "math_expression": "x = \\dfrac{3\\pi}{4} = 0.75\\pi" },
            { "verbal_explanation": "נגזור את הפונקציה למציאת קיצון.", "math_expression": "f'(x) = \\cos(x) - \\sin(x)" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "\\cos(x) - \\sin(x) = 0 \\Rightarrow \\sin(x) = \\cos(x)" },
            { "verbal_explanation": "נמיר לטנגנס.", "math_expression": "\\tan(x) = 1" },
            { "verbal_explanation": "נמצא את הזווית המתאימה בתחום.", "math_expression": "x = \\dfrac{\\pi}{4} = 0.25\\pi" },
            { "verbal_explanation": "נציב בפונקציה למציאת הערך המקסימלי.", "math_expression": "f(0.25\\pi) = \\sin(45^{\\circ}) + \\cos(45^{\\circ}) = \\dfrac{\\sqrt{2}}{2} + \\dfrac{\\sqrt{2}}{2}" },
            { "verbal_explanation": "נחשב את הסכום.", "math_expression": "f(0.25\\pi) = \\sqrt{2} \\approx 1.414" }
        ],
        "final_answer": "א. (0.75π, 0) ב. (0.25π, 1.414)"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2015, מועד קיץ ב'<br>בתוך חצי מעגל שרדיוסו 10 חסום מלבן. צלע אחת של המלבן מונחת על קוטר חצי המעגל.<br>א. הביעו את שטח המלבן כפונקציה של מחצית מבסיסו (\\( x \\)).<br>ב. מהו השטח המקסימלי של המלבן?&rlm;",
        "options": ["א. S(x) = 2x√(100-x²) ב. 100", "א. S(x) = x√(100-x²) ב. 50", "א. S(x) = 2x√(50-x²) ב. 75", "א. S(x) = 4x√(100-x²) ב. 200"],
        "correctAnswer": 0,
        "hint": "השתמשו במשפט פיתגורס להבעת גובה המלבן בעזרת x והרדיוס. שטח המלבן הוא הבסיס כולו (2x) כפול הגובה.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את מחצית רוחב המלבן.", "math_expression": "x" },
            { "verbal_explanation": "נביע את גובה המלבן בעזרת משפט פיתגורס המסתמך על הרדיוס.", "math_expression": "y = \\sqrt{10^{2} - x^{2}} = \\sqrt{100 - x^{2}}" },
            { "verbal_explanation": "נרכיב פונקציית שטח.", "math_expression": "S(x) = 2x \\times \\sqrt{100 - x^{2}}" },
            { "verbal_explanation": "נכניס את המשתנה אל תוך השורש.", "math_expression": "S(x) = \\sqrt{4x^{2}(100 - x^{2})} = \\sqrt{400x^{2} - 4x^{4}}" },
            { "verbal_explanation": "נגזור את הפונקציה הפנימית.", "math_expression": "g'(x) = 800x - 16x^{3}" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "16x(50 - x^{2}) = 0" },
            { "verbal_explanation": "נפתור עבור הפתרון החיובי.", "math_expression": "x^{2} = 50 \\Rightarrow x = \\sqrt{50}" },
            { "verbal_explanation": "נציב למציאת השטח המקסימלי.", "math_expression": "S(\\sqrt{50}) = 2\\sqrt{50} \\times \\sqrt{100 - 50}" },
            { "verbal_explanation": "נחשב את המכפלה.", "math_expression": "S = 2 \\times \\sqrt{50} \\times \\sqrt{50} = 2 \\times 50 = 100" }
        ],
        "final_answer": "א. S(x) = 2x√(100-x²) ב. 100"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2023, מועד נבצרים<br>לפונקציה \\( f(x) = \\dfrac{a}{x^{2}} + x \\) יש נקודת מינימום ב- \\( x = 4 \\).<br>א. מצאו את ערך הפרמטר \\( a \\).<br>ב. מהו הערך המינימלי של הפונקציה?&rlm;",
        "options": ["א. 32 ב. 6", "א. 16 ב. 5", "א. 8 ב. 4.5", "א. 64 ב. 8"],
        "correctAnswer": 0,
        "hint": "גזרו את הפונקציה, הציבו בנגזרת x=4 והשוו לאפס למציאת a. לאחר מכן הציבו את a ו-x בפונקציה המקורית.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הפונקציה עם חזקה שלילית.", "math_expression": "f(x) = a x^{-2} + x" },
            { "verbal_explanation": "נגזור.", "math_expression": "f'(x) = -2a x^{-3} + 1 = 1 - \\dfrac{2a}{x^{3}}" },
            { "verbal_explanation": "נציב את הנתון של נקודת המינימום בנגזרת ונשווה לאפס.", "math_expression": "1 - \\dfrac{2a}{4^{3}} = 0" },
            { "verbal_explanation": "נחשב את החזקה במכנה.", "math_expression": "1 - \\dfrac{2a}{64} = 0" },
            { "verbal_explanation": "נעביר אגף.", "math_expression": "\\dfrac{2a}{64} = 1" },
            { "verbal_explanation": "נכפול.", "math_expression": "2a = 64" },
            { "verbal_explanation": "נחלץ את המקדם.", "math_expression": "a = 32" },
            { "verbal_explanation": "נציב את המקדם ואת הערך בפונקציה למציאת גובה המינימום.", "math_expression": "f(4) = \\dfrac{32}{4^{2}} + 4" },
            { "verbal_explanation": "נחשב את הערך הסופי.", "math_expression": "f(4) = \\dfrac{32}{16} + 4 = 2 + 4 = 6" }
        ],
        "final_answer": "א. 32 ב. 6"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2022, מועד קיץ ב'<br>בסדרה חשבונית יש \\( 2n \\) איברים. סכום האיברים במקומות הזוגיים גדול ב-20 מסכום האיברים במקומות האי-זוגיים. האיבר האחרון הוא 50.<br>א. מצאו את מכפלת מספר הזוגות בהפרש (\\( nd \\)).<br>ב. אם נתון כי \\( n=10 \\), מצאו את האיבר הראשון.&rlm;",
        "options": ["א. 20 ב. 12", "א. 40 ב. 8", "א. 10 ב. 14", "א. 20 ב. 10"],
        "correctAnswer": 0,
        "hint": "ההפרש בין סכום האיברים במקומות הזוגיים לאי-זוגיים שווה למספר הזוגות כפול הפרש הסדרה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הקשר בין סכום הזוגיים לאי-זוגיים.", "math_expression": "S_{even} - S_{odd} = n \\times d" },
            { "verbal_explanation": "נציב את ההפרש הנתון.", "math_expression": "n \\times d = 20" },
            { "verbal_explanation": "נשתמש בנתון שניתן בסעיף ב'.", "math_expression": "n = 10" },
            { "verbal_explanation": "נחשב את הפרש הסדרה.", "math_expression": "10d = 20 \\Rightarrow d = 2" },
            { "verbal_explanation": "מספר האיברים הכולל בסדרה.", "math_expression": "2n = 20" },
            { "verbal_explanation": "נשתמש בנוסחת האיבר הכללי עבור האיבר האחרון.", "math_expression": "a_{20} = a_1 + 19d" },
            { "verbal_explanation": "נציב את הנתונים.", "math_expression": "50 = a_1 + 19(2)" },
            { "verbal_explanation": "נחשב את המכפלה.", "math_expression": "50 = a_1 + 38" },
            { "verbal_explanation": "נחלץ את האיבר הראשון.", "math_expression": "a_1 = 50 - 38 = 12" }
        ],
        "final_answer": "א. 20 ב. 12"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2021, מועד קיץ א'<br>במפעל יש שתי מכונות. ההסתברות שמכונה א' תתקלקל היא 0.1. ההסתברות שמכונה ב' תתקלקל היא 0.2. הקלקולים בלתי תלויים.<br>א. מה ההסתברות שלפחות מכונה אחת תתקלקל?<br>ב. מה ההסתברות שבדיוק מכונה אחת תתקלקל?&rlm;",
        "options": ["א. 0.28 ב. 0.26", "א. 0.3 ב. 0.28", "א. 0.26 ב. 0.22", "א. 0.28 ב. 0.18"],
        "correctAnswer": 0,
        "hint": "לפחות אחת תתקלקל: המאורע המשלים לכך שאף אחת לא תתקלקל. בדיוק אחת: א' מתקלקלת וב' לא, או להפך.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את ההסתברויות לקלקול.", "math_expression": "P(A) = 0.1 \\quad , \\quad P(B) = 0.2" },
            { "verbal_explanation": "נחשב את ההסתברויות לפעולה תקינה.", "math_expression": "P(\\overline{A}) = 0.9 \\quad , \\quad P(\\overline{B}) = 0.8" },
            { "verbal_explanation": "נחשב את ההסתברות שאף מכונה לא תתקלקל.", "math_expression": "P(None) = 0.9 \\times 0.8 = 0.72" },
            { "verbal_explanation": "נחשב את ההסתברות שלפחות אחת תתקלקל כמאורע משלים.", "math_expression": "P(At\\_least\\_1) = 1 - 0.72 = 0.28" },
            { "verbal_explanation": "נחשב את ההסתברות שרק א' תתקלקל.", "math_expression": "P_1 = 0.1 \\times 0.8 = 0.08" },
            { "verbal_explanation": "נחשב את ההסתברות שרק ב' תתקלקל.", "math_expression": "P_2 = 0.9 \\times 0.2 = 0.18" },
            { "verbal_explanation": "נחבר את ההסתברויות לקבלת מאורע של בדיוק תקלה אחת.", "math_expression": "P(Exactly\\_1) = 0.08 + 0.18 = 0.26" }
        ],
        "final_answer": "א. 0.28 ב. 0.26"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2020, מועד חורף<br>פתרו את המשוואה הטריגונומטרית \\( 2\\sin^{2}(x) - \\sin(x) = 0 \\) בתחום \\( 0 \\leq x \\leq \\pi \\).<br>א. מצאו את כל הפתרונות.<br>ב. כמה פתרונות יש בסך הכל?&rlm;",
        "options": ["א. 0, π/6, 5π/6, π ב. 4", "א. 0, π/2, π ב. 3", "א. π/6, 5π/6 ב. 2", "א. 0, π/3, 2π/3, π ב. 4"],
        "correctAnswer": 0,
        "hint": "הוציאו את פונקציית הסינוס כגורם משותף מחוץ לסוגריים ופתרו שתי משוואות נפרדות.",
        "solution_steps": [
            { "verbal_explanation": "נוציא גורם משותף.", "math_expression": "\\sin(x)[2\\sin(x) - 1] = 0" },
            { "verbal_explanation": "נרשום את המשוואה הראשונה.", "math_expression": "\\sin(x) = 0" },
            { "verbal_explanation": "נמצא פתרונות בתחום הנתון.", "math_expression": "x_1 = 0 \\quad , \\quad x_2 = \\pi" },
            { "verbal_explanation": "נרשום את המשוואה השנייה.", "math_expression": "2\\sin(x) - 1 = 0" },
            { "verbal_explanation": "נבודד את הפונקציה.", "math_expression": "\\sin(x) = 0.5" },
            { "verbal_explanation": "נמצא פתרונות בתחום.", "math_expression": "x_3 = \\dfrac{\\pi}{6} \\quad , \\quad x_4 = \\dfrac{5\\pi}{6}" },
            { "verbal_explanation": "נמנה את כמות הפתרונות שנמצאו.", "math_expression": "Total = 4" }
        ],
        "final_answer": "א. 0, π/6, 5π/6, π ב. 4"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"20,130 180,130 60,30\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"60\" y1=\"30\" x2=\"60\" y2=\"130\" stroke=\"#f87171\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/></svg></div><br>בגרות 2019, מועד קיץ א'<br>במשולש ישר זווית, מורידים גובה ליתר שמחלק אותו לקטעים באורך 9 ו-16.<br>א. מצאו את אורך הגובה.<br>ב. מצאו את שטח המשולש המקורי.&rlm;",
        "options": ["א. 12 ב. 150", "א. 15 ב. 175", "א. 12 ב. 300", "א. 10 ב. 125"],
        "correctAnswer": 0,
        "hint": "ריבוע הגובה ליתר שווה למכפלת היטלי הניצבים על היתר.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את אורכי הקטעים על היתר.", "math_expression": "x = 9 \\quad , \\quad y = 16" },
            { "verbal_explanation": "נשתמש במשפט הגובה ליתר.", "math_expression": "h^{2} = x \\times y" },
            { "verbal_explanation": "נציב.", "math_expression": "h^{2} = 9 \\times 16" },
            { "verbal_explanation": "נחשב את המכפלה.", "math_expression": "h^{2} = 144" },
            { "verbal_explanation": "נוציא שורש למציאת הגובה.", "math_expression": "h = 12" },
            { "verbal_explanation": "נחשב את אורך היתר השלם (הבסיס).", "math_expression": "c = 9 + 16 = 25" },
            { "verbal_explanation": "נחשב את השטח.", "math_expression": "S = \\dfrac{c \\times h}{2}" },
            { "verbal_explanation": "נציב.", "math_expression": "S = \\dfrac{25 \\times 12}{2}" },
            { "verbal_explanation": "נחשב את התוצאה.", "math_expression": "S = 150" }
        ],
        "final_answer": "א. 12 ב. 150"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2018, מועד קיץ ב'<br>נתונה הפונקציה \\( f(x) = \\dfrac{ax^{2} + 5}{x^{2} - b} \\). לפונקציה אסימפטוטה אופקית ב-\\( y = 2 \\) ואסימפטוטות אנכיות ב-\\( x = \\pm 3 \\).<br>א. מצאו את \\( a \\) ואת \\( b \\).<br>ב. מצאו את נקודת הקיצון של הפונקציה.&rlm;",
        "options": ["א. a=2, b=9 ב. (0, -0.55)", "א. a=1, b=3 ב. (0, 1.66)", "א. a=2, b=3 ב. (0, -1.66)", "א. a=4, b=9 ב. (0, -1.5)"],
        "correctAnswer": 0,
        "hint": "יחס המקדמים הריבועיים קובע אסימפטוטה אופקית. המכנה מתאפס בערכי האסימפטוטה האנכית.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש באסימפטוטה האופקית.", "math_expression": "\\dfrac{a}{1} = 2 \\Rightarrow a = 2" },
            { "verbal_explanation": "נשתמש באסימפטוטה האנכית המאפסת את המכנה.", "math_expression": "3^{2} - b = 0 \\Rightarrow b = 9" },
            { "verbal_explanation": "נרשום את הפונקציה.", "math_expression": "f(x) = \\dfrac{2x^{2} + 5}{x^{2} - 9}" },
            { "verbal_explanation": "נגזור.", "math_expression": "f'(x) = \\dfrac{4x(x^{2} - 9) - 2x(2x^{2} + 5)}{(x^{2} - 9)^{2}}" },
            { "verbal_explanation": "נפשט את המונה.", "math_expression": "f'(x) = \\dfrac{4x^{3} - 36x - 4x^{3} - 10x}{(x^{2} - 9)^{2}}" },
            { "verbal_explanation": "נכנס איברים במונה הנגזרת.", "math_expression": "f'(x) = \\dfrac{-46x}{(x^{2} - 9)^{2}}" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "-46x = 0 \\Rightarrow x = 0" },
            { "verbal_explanation": "נציב למציאת הערך.", "math_expression": "f(0) = \\dfrac{5}{-9} \\approx -0.555" },
            { "verbal_explanation": "הנקודה התקבלה.", "math_expression": "(0, -0.55)" }
        ],
        "final_answer": "א. a=2, b=9 ב. (0, -0.55)"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2017, מועד חורף<br>נתונה הפונקציה \\( f(x) = \\sqrt{x^{2} - ax + 16} \\). הפונקציה מוגדרת לכל \\( x \\).<br>א. מהו התחום האפשרי לפרמטר \\( a \\)?<br>ב. אם נתון כי \\( a=0 \\), מהו המינימום המוחלט של הפונקציה?&rlm;",
        "options": ["א. בין -8 ל-8 ב. 4", "א. גדול מ-8 ב. 0", "א. בין -4 ל-4 ב. 2", "א. כל ערך ב. 16"],
        "correctAnswer": 0,
        "hint": "כדי שהפונקציה תהיה מוגדרת לכל x, הביטוי מתחת לשורש לא יכול להיות שלילי. דלתא קטנה או שווה לאפס.",
        "solution_steps": [
            { "verbal_explanation": "התנאי לתחום הגדרה מלא.", "math_expression": "x^{2} - ax + 16 \\geq 0" },
            { "verbal_explanation": "התנאי מקיים פרבולה ללא שורשים או משיקה.", "math_expression": "D \\leq 0" },
            { "verbal_explanation": "נרשום את הדיסקרימיננטה.", "math_expression": "a^{2} - 4(16) \\leq 0" },
            { "verbal_explanation": "נפשט.", "math_expression": "a^{2} - 64 \\leq 0" },
            { "verbal_explanation": "נמצא את התחום.", "math_expression": "-8 \\leq a \\leq 8" },
            { "verbal_explanation": "נציב את הנתון מסעיף ב'.", "math_expression": "f(x) = \\sqrt{x^{2} + 16}" },
            { "verbal_explanation": "המינימום של השורש מתקבל כאשר הפנים מינימלי.", "math_expression": "x^{2} \\geq 0 \\Rightarrow Min \\, at \\, x=0" },
            { "verbal_explanation": "נציב.", "math_expression": "f(0) = \\sqrt{16} = 4" }
        ],
        "final_answer": "א. בין -8 ל-8 ב. 4"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2016, מועד קיץ א'<br>אורך חוט הוא 40 ס''מ. חותכים אותו לשני חלקים. מחלק אחד יוצרים ריבוע ומחלק שני יוצרים מעגל.<br>א. הביעו את פונקציית סכום השטחים באמצעות אורך החלק של הריבוע (\\( x \\)).<br>ב. מהו \\( x \\) עבורו השטח מינימלי?&rlm;",
        "options": ["א. x²/16 + (40-x)²/(4π) ב. 160/(π+4)", "א. x²/4 + (40-x)²/π ב. 80/(π+2)", "א. x²/16 + (40-x)²/4 ב. 20", "א. x² + (40-x)² ב. 10"],
        "correctAnswer": 0,
        "hint": "היקף הריבוע הוא x. היקף המעגל הוא 40 פחות x.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את היקף הריבוע.", "math_expression": "P_1 = x" },
            { "verbal_explanation": "נגדיר את צלע הריבוע.", "math_expression": "a = \\dfrac{x}{4}" },
            { "verbal_explanation": "נגדיר את היקף המעגל.", "math_expression": "P_2 = 40 - x" },
            { "verbal_explanation": "נגדיר את רדיוס המעגל.", "math_expression": "r = \\dfrac{40 - x}{2\\pi}" },
            { "verbal_explanation": "נרכיב פונקציית שטח.", "math_expression": "S(x) = (\\dfrac{x}{4})^{2} + \\pi(\\dfrac{40 - x}{2\\pi})^{2}" },
            { "verbal_explanation": "נפשט.", "math_expression": "S(x) = \\dfrac{x^{2}}{16} + \\dfrac{(40 - x)^{2}}{4\\pi}" },
            { "verbal_explanation": "נגזור.", "math_expression": "S'(x) = \\dfrac{2x}{16} - \\dfrac{2(40 - x)}{4\\pi}" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "\\dfrac{x}{8} = \\dfrac{40 - x}{2\\pi}" },
            { "verbal_explanation": "נכפול בהצלבה.", "math_expression": "2\\pi x = 320 - 8x" },
            { "verbal_explanation": "נבודד.", "math_expression": "x(2\\pi + 8) = 320 \\Rightarrow x = \\dfrac{160}{\\pi + 4}" }
        ],
        "final_answer": "א. x²/16 + (40-x)²/(4π) ב. 160/(π+4)"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"20,130 180,130 60,30\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><text x=\"80\" y=\"110\" font-family=\"Arial\" font-size=\"14\">12</text><text x=\"130\" y=\"80\" font-family=\"Arial\" font-size=\"14\">10</text></svg></div><br>בגרות 2015, מועד קיץ ב'<br>במשולש נתון כי צלע אחת היא 10, הצלע השנייה היא 12, והזווית שביניהן היא 60 מעלות.<br>א. מצאו את אורך הצלע השלישית.<br>ב. מצאו את שטח המשולש.&rlm;",
        "options": ["א. 11.13 ב. 51.96", "א. 14 ב. 60", "א. 12.5 ב. 45", "א. 10.8 ב. 55"],
        "correctAnswer": 0,
        "hint": "השתמשו במשפט הקוסינוסים למציאת הצלע, ובנוסחת שטח משולש הכוללת סינוס.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את משפט הקוסינוסים.", "math_expression": "c^{2} = a^{2} + b^{2} - 2ab\\cos C" },
            { "verbal_explanation": "נציב את הנתונים.", "math_expression": "c^{2} = 10^{2} + 12^{2} - 2(10)(12)\\cos(60^{\\circ})" },
            { "verbal_explanation": "נחשב.", "math_expression": "c^{2} = 100 + 144 - 240(0.5)" },
            { "verbal_explanation": "נפשט.", "math_expression": "c^{2} = 244 - 120 = 124" },
            { "verbal_explanation": "נוציא שורש.", "math_expression": "c = \\sqrt{124} \\approx 11.13" },
            { "verbal_explanation": "נרשום את נוסחת השטח.", "math_expression": "S = \\dfrac{a \\times b \\times \\sin C}{2}" },
            { "verbal_explanation": "נציב.", "math_expression": "S = \\dfrac{10 \\times 12 \\times \\sin(60^{\\circ})}{2}" },
            { "verbal_explanation": "נחשב.", "math_expression": "S = 60 \\times \\dfrac{\\sqrt{3}}{2} = 30\\sqrt{3}" },
            { "verbal_explanation": "נחשב ערך עשרוני.", "math_expression": "S \\approx 51.96" }
        ],
        "final_answer": "א. 11.13 ב. 51.96"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2014, מועד חורף<br>נתונה הפונקציה \\( f(x) = x^{4} - 8x^{2} \\).<br>א. מצאו את נקודות החיתוך עם ציר ה-\\( x \\).<br>ב. מצאו את שיעורי נקודות המינימום של הפונקציה.&rlm;",
        "options": ["א. 0, 2.83, -2.83 ב. (2, -16), (-2, -16)", "א. 0, 4, -4 ב. (2, -8), (-2, -8)", "א. 0, 2, -2 ב. (1.41, -12), (-1.41, -12)", "א. 0, 8, -8 ב. (4, -32), (-4, -32)"],
        "correctAnswer": 0,
        "hint": "השוו את הפונקציה לאפס והוציאו גורם משותף. למציאת קיצון, גזרו והשוו לאפס.",
        "solution_steps": [
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "x^{4} - 8x^{2} = 0" },
            { "verbal_explanation": "נוציא גורם משותף.", "math_expression": "x^{2}(x^{2} - 8) = 0" },
            { "verbal_explanation": "נמצא שורשים.", "math_expression": "x = 0 \\quad , \\quad x^{2} = 8 \\Rightarrow x = \\pm \\sqrt{8} \\approx \\pm 2.83" },
            { "verbal_explanation": "נגזור.", "math_expression": "f'(x) = 4x^{3} - 16x" },
            { "verbal_explanation": "נשווה לאפס ונוציא גורם משותף.", "math_expression": "4x(x^{2} - 4) = 0" },
            { "verbal_explanation": "נמצא נקודות קריטיות.", "math_expression": "x = 0 \\quad , \\quad x = \\pm 2" },
            { "verbal_explanation": "נציב לבדיקת סוג וערך.", "math_expression": "f(2) = 16 - 32 = -16 \\Rightarrow Min" },
            { "verbal_explanation": "בשל זוגיות הפונקציה.", "math_expression": "f(-2) = -16 \\Rightarrow Min" },
            { "verbal_explanation": "נקודות המינימום התקבלו.", "math_expression": "(2, -16) \\quad , \\quad (-2, -16)" }
        ],
        "final_answer": "א. 0, 2.83, -2.83 ב. (2, -16), (-2, -16)"
    },
    {
        "topic": "bagrut_prep_571",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2013, מועד קיץ א'<br>שני רוכבי אופניים יצאו יחד מאותו מקום באותו כיוון. מהירות הראשון הייתה 15 קמ''ש ומהירות השני 20 קמ''ש. כעבור כמה זמן המרחק ביניהם יהיה 12.5 ק''מ?<br>א. בטאו את המרחק של כל רוכב כפונקציה של הזמן \\( t \\).<br>ב. מצאו את \\( t \\).&rlm;",
        "options": ["א. 15t, 20t ב. 2.5", "א. 15/t, 20/t ב. 2", "א. 15+t, 20+t ב. 3", "א. t/15, t/20 ב. 1.5"],
        "correctAnswer": 0,
        "hint": "המרחק שווה למהירות כפול הזמן. הפרש המרחקים שווה ל-12.5.",
        "solution_steps": [
            { "verbal_explanation": "נביע מרחק רוכב א'.", "math_expression": "D_1 = 15t" },
            { "verbal_explanation": "נביע מרחק רוכב ב'.", "math_expression": "D_2 = 20t" },
            { "verbal_explanation": "נרכיב משוואת הפרש.", "math_expression": "D_2 - D_1 = 12.5" },
            { "verbal_explanation": "נציב.", "math_expression": "20t - 15t = 12.5" },
            { "verbal_explanation": "נחסר.", "math_expression": "5t = 12.5" },
            { "verbal_explanation": "נחלק בחמש.", "math_expression": "t = \\dfrac{12.5}{5}" },
            { "verbal_explanation": "הזמן התקבל.", "math_expression": "t = 2.5" }
        ],
        "final_answer": "א. 15t, 20t ב. 2.5"
    }
];