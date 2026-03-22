const questionsDB = [
    // ==========================================
    // תת נושא 1: עקומת פעמון (10 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "normal_dist_372",
        subTopic: "עקומת פעמון",
        question_text: "בהתפלגות נורמלית (עקומת פעמון), איזה אחוז מהנתונים נמצא בדיוק מעל הממוצע?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 100' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><path d='M 10 90 Q 50 90 70 50 T 100 10 T 130 50 T 190 90' fill='none' stroke='#3b82f6' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='90' stroke='#ef4444' stroke-dasharray='4,4' stroke-width='2'/></svg></div>",
        options: ["50", "100", "68", "16"],
        correctAnswer: 0,
        hint: "עקומת הפעמון סימטרית לחלוטין. הציר האמצעי (הממוצע) חוצה אותה לשני חצאים שווים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת התכונה המרכזית של עקומת הפעמון - סימטריה מלאה סביב ציר הממוצע.", math_expression: "P_{1} = P_{2}" },
            { verbal_explanation: "שלב 2: סך כל השטח מתחת לעקומה מייצג מאה אחוז מהאוכלוסייה.", math_expression: "P = 100" },
            { verbal_explanation: "שלב 3: חלוקת השטח הכולל לשתיים מניבה את השטח שמעל הממוצע.", math_expression: "P = 100 : 2" },
            { verbal_explanation: "שלב 4: התוצאה באחוזים.", math_expression: "P = 50" },
            { verbal_explanation: "שלב 5: בחירת התשובה המתאימה מתוך החלופות.", math_expression: "50" }
        ],
        final_answer: "50"
    },

    // שאלה מספר 2
    {
        topic: "normal_dist_372",
        subTopic: "עקומת פעמון",
        question_text: "על פי גרף ההתפלגות הנורמלית של משרד החינוך, איזה אחוז מהאוכלוסייה נמצא בין הממוצע לבין חצי סטיית תקן מעליו (כלומר בין \\( \\bar{x} \\) לבין \\( \\bar{x} + 0.5S \\))?&rlm;",
        options: ["19", "15", "34", "9"],
        correctAnswer: 0,
        hint: "זכרו את חלוקת האחוזים הקבועה של משרד החינוך (מהממוצע והלאה: 19%, 15%, 9%, 5%, 1.5%, 0.5%).",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי התחום המבוקש מתוך עקומת הפעמון התקנית.", math_expression: "\\bar{x} \\rightarrow \\bar{x} + 0.5S" },
            { verbal_explanation: "שלב 2: קריאת האחוז המתאים לפרוסה הראשונה הצמודה לממוצע, מתוך דף הנוסחאות.", math_expression: "P = 19" },
            { verbal_explanation: "שלב 3: אין צורך בחישוב נוסף, מדובר בהכרת המודל.", math_expression: "19" }
        ],
        final_answer: "19"
    },

    // שאלה מספר 3
    {
        topic: "normal_dist_372",
        subTopic: "עקומת פעמון",
        question_text: "איזה אחוז מהאוכלוסייה נמצא במרחק של עד סטיית תקן אחת מהממוצע (מעליו ומתחתיו יחד)?&rlm;",
        options: ["68", "34", "38", "95"],
        correctAnswer: 0,
        hint: "מרחק של סטיית תקן אחת כולל שתי פרוסות מימין (19+15) ושתי פרוסות משמאל (19+15).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת התחום המבוקש במתמטיקה.", math_expression: "\\bar{x} - S \\rightarrow \\bar{x} + S" },
            { verbal_explanation: "שלב 2: סכימת האחוזים של הפרוסות בצד ימין (עד פלוס סטיית תקן אחת).", math_expression: "P_{1} = 19 + 15 = 34" },
            { verbal_explanation: "שלב 3: סכימת האחוזים של הפרוסות בצד שמאל (בזכות הסימטריה הערך זהה).", math_expression: "P_{2} = 19 + 15 = 34" },
            { verbal_explanation: "שלב 4: חיבור שני הצדדים לקבלת האחוז הכולל בתחום.", math_expression: "P = 34 + 34" },
            { verbal_explanation: "שלב 5: התוצאה הסופית.", math_expression: "P = 68" }
        ],
        final_answer: "68"
    },

    // שאלה מספר 4
    {
        topic: "normal_dist_372",
        subTopic: "עקומת פעמון",
        question_text: "על פי עקומת הפעמון, איזה אחוז מהנתונים נמצאים בדיוק מעל הממוצע פלוס סטיית תקן אחת (בתחום \\( x > \\bar{x} + S \\))?&rlm;",
        options: ["16", "50", "2.5", "84"],
        correctAnswer: 0,
        hint: "השטח שמעל הממוצע הוא 50%. השטח שבין הממוצע לפלוס סטיית תקן אחת הוא 34%. חסרו את 34 מ-50.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב האחוז הכללי הנמצא מעל הממוצע.", math_expression: "P_{1} = 50" },
            { verbal_explanation: "שלב 2: חישוב האחוז הנמצא בין הממוצע לבין נקודת החתך המבוקשת.", math_expression: "P_{2} = 19 + 15 = 34" },
            { verbal_explanation: "שלב 3: חיסור השטח הקרוב לממוצע מהשטח הכולל שמימינו, כדי לקבל את החלק העליון.", math_expression: "P = 50 - 34" },
            { verbal_explanation: "שלב 4: תוצאת החיסור (ניתן גם לחבר את הפרוסות הנותרות: 9+5+1.5+0.5).", math_expression: "P = 16" },
            { verbal_explanation: "שלב 5: אישור התשובה.", math_expression: "16" }
        ],
        final_answer: "16"
    },

    // שאלה מספר 5
    {
        topic: "normal_dist_372",
        subTopic: "עקומת פעמון",
        question_text: "בהתפלגות נורמלית מתקיים תמיד שוויון בין שלושה מדדים סטטיסטיים מרכזיים בנקודת השיא של הפעמון. אילו מדדים אלו?&rlm;",
        options: ["ממוצע, חציון ושכיח", "ממוצע, סטיית תקן וטווח", "חציון, שונות וסטיית תקן", "שכיח, טווח וממוצע"],
        correctAnswer: 0,
        hint: "גרף הפעמון מצביע על כך שהערך הכי נפוץ (השכיח) נמצא בדיוק באמצע (חציון), שהוא גם מרכז המסה של הנתונים (ממוצע).",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי נקודת השיא של הפעמון. זהו הערך המופיע הכי הרבה פעמים באוכלוסייה, כלומר השכיח.", math_expression: "x_{1}" },
            { verbal_explanation: "שלב 2: זיהוי תכונת הסימטריה. חמישים אחוז מהנתונים מתחת לנקודה ומימינה, לכן זהו החציון.", math_expression: "x_{2}" },
            { verbal_explanation: "שלב 3: בשל הסימטריה המוחלטת, זהו גם שיווי המשקל החשבוני של הנתונים (הממוצע).", math_expression: "\\bar{x}" },
            { verbal_explanation: "שלב 4: המסקנה היא ששלושתם שווים ומתלכדים באותה נקודה.", math_expression: "x_{1} = x_{2} = \\bar{x}" },
            { verbal_explanation: "שלב 5: בחירת התשובה העיונית המתאימה.", math_expression: "1" }
        ],
        final_answer: "ממוצע, חציון ושכיח"
    },

    // שאלה מספר 6
    {
        topic: "normal_dist_372",
        subTopic: "עקומת פעמון",
        question_text: "איזה אחוז מהאוכלוסייה נמצא בין הממוצע לבין שתי סטיות תקן מעליו (כלומר בתחום שבין \\( \\bar{x} \\) לבין \\( \\bar{x} + 2S \\))?&rlm;",
        options: ["48", "47.5", "34", "95"],
        correctAnswer: 0,
        hint: "חברו את 4 הפרוסות הראשונות מימין לממוצע (כל פרוסה מייצגת חצי סטיית תקן): 19 + 15 + 9 + 5.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הפרוסות הכלולות בתחום הנדרש מתוך העקומה.", math_expression: "\\bar{x} \\rightarrow \\bar{x} + 2S" },
            { verbal_explanation: "שלב 2: כתיבת האחוזים של ארבעת חצאי סטיות התקן הכלולים בטווח זה.", math_expression: "19 \\quad , \\quad 15 \\quad , \\quad 9 \\quad , \\quad 5" },
            { verbal_explanation: "שלב 3: חיבור האחוזים יחד.", math_expression: "P = 19 + 15 + 9 + 5" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הסכימה.", math_expression: "P = 48" },
            { verbal_explanation: "שלב 5: התשובה הישירה להזנה במערכת.", math_expression: "48" }
        ],
        final_answer: "48"
    },

    // שאלה מספר 7
    {
        topic: "normal_dist_372",
        subTopic: "עקומת פעמון",
        question_text: "מה קורה לצורת פעמון ההתפלגות הנורמלית אם מקטינים את סטיית התקן (אך שומרים על אותו ממוצע)?&rlm;",
        options: ["הפעמון הופך לצר וגבוה יותר", "הפעמון הופך לרחב ונמוך יותר", "הפעמון זז ימינה", "הפעמון זז שמאלה"],
        correctAnswer: 0,
        hint: "סטיית תקן קטנה אומרת שהנתונים מרוכזים וצפופים יותר סביב הממוצע, ולכן הגרף נראה מכווץ (צר) ועולה גבוה יותר בשיא.",
        solution_steps: [
            { verbal_explanation: "שלב 1: משמעות סטיית תקן קטנה היא פיזור קטן של נתונים סביב המרכז.", math_expression: "S_{2} < S_{1}" },
            { verbal_explanation: "שלב 2: רוב הנתונים מצטופפים קרוב מאוד לממוצע בגלל המרחק הקטן.", math_expression: "x \\approx \\bar{x}" },
            { verbal_explanation: "שלב 3: עקב הצפיפות במרכז, גובה הפעמון בנקודת הממוצע מזנק מעלה כדי לשמור על שטח כולל של מאה אחוז.", math_expression: "1 = 1" },
            { verbal_explanation: "שלב 4: הרוחב מתכווץ כי יש פחות נתונים בקצוות הרחוקים.", math_expression: "1 = 1" },
            { verbal_explanation: "שלב 5: בחירת התיאור הנכון.", math_expression: "1" }
        ],
        final_answer: "הפעמון הופך לצר וגבוה יותר"
    },

    // שאלה מספר 8
    {
        topic: "normal_dist_372",
        subTopic: "עקומת פעמון",
        question_text: "איזה אחוז מהנתונים נמצא ב'זנב' השמאלי הקיצוני, מתחת למינוס 2.5 סטיות תקן מהממוצע (כלומר \\( x < \\bar{x} - 2.5S \\))?&rlm;",
        options: ["0.5", "1.5", "2", "5"],
        correctAnswer: 0,
        hint: "הפרוסה האחרונה ביותר בגרף של משרד החינוך (בקצה השמאלי והימני) מכילה 0.5% מהנתונים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי התחום המבוקש בקצה העקומה השמאלי.", math_expression: "x < \\bar{x} - 2.5S" },
            { verbal_explanation: "שלב 2: קריאת האחוז המוגדר לפרוסה האחרונה והקיצונית ביותר בגרף.", math_expression: "P = 0.5" },
            { verbal_explanation: "שלב 3: התשובה העובדתית מתוך דף הנוסחאות.", math_expression: "0.5" }
        ],
        final_answer: "0.5"
    },

    // שאלה מספר 9
    {
        topic: "normal_dist_372",
        subTopic: "עקומת פעמון",
        question_text: "קבוצת ציונים מתפלגת נורמלית. הממוצע הוא 70. אם ניקח את כל התלמידים ונוסיף לכל אחד מהם 5 נקודות, איזה מהגרפים הבאים יתאר נכון את השינוי?&rlm;",
        options: ["הפעמון יוזז ימינה ב-5 יחידות, צורתו תישאר זהה", "הפעמון יתרחב", "הפעמון יהפוך לצר יותר", "הפעמון יוזז שמאלה"],
        correctAnswer: 0,
        hint: "הוספת קבוע לכל האוכלוסייה משנה את הממוצע בלבד (הזזה של הגרף), אך לא משנה את הפיזור והרווח בין התלמידים (צורת הגרף נשמרת).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הוספת קבוע לכל נתון מגדילה את הממוצע באותו קבוע.", math_expression: "\\bar{x}_{2} = 70 + 5 = 75" },
            { verbal_explanation: "שלב 2: הוספת קבוע אינה משנה את המרחק של הנתונים מהממוצע החדש, ולכן סטיית התקן נותרת בעינה.", math_expression: "S_{2} = S_{1}" },
            { verbal_explanation: "שלב 3: משמעות גרפית: שינוי ממוצע שווה להזזה אופקית (ימינה כי גדל).", math_expression: "\\bar{x}_{2} > \\bar{x}_{1}" },
            { verbal_explanation: "שלב 4: משמעות גרפית נוספת: שמירה על סטיית תקן שווה לשמירה על צורה מדויקת של הפעמון.", math_expression: "S_{2} = S_{1}" },
            { verbal_explanation: "שלב 5: התיאור הנכון נבחר.", math_expression: "1" }
        ],
        final_answer: "הפעמון יוזז ימינה ב-5 יחידות, צורתו תישאר זהה"
    },

    // שאלה מספר 10
    {
        topic: "normal_dist_372",
        subTopic: "עקומת פעמון",
        question_text: "מהו אחוז האוכלוסייה הנמצא בין \\( \\bar{x} - 0.5S \\) לבין \\( \\bar{x} + 0.5S \\)?&rlm;",
        options: ["38", "19", "68", "34"],
        correctAnswer: 0,
        hint: "חברו את הפרוסה הראשונה מימין לממוצע (19%) עם הפרוסה הראשונה משמאל לממוצע (19%).",
        solution_steps: [
            { verbal_explanation: "שלב 1: פיצול התחום לשניים: מהממוצע ימינה ומהממוצע שמאלה.", math_expression: "\\bar{x} - 0.5S \\rightarrow \\bar{x} \\quad , \\quad \\bar{x} \\rightarrow \\bar{x} + 0.5S" },
            { verbal_explanation: "שלב 2: מציאת האחוז לפרוסה מימין לממוצע.", math_expression: "P_{1} = 19" },
            { verbal_explanation: "שלב 3: מציאת האחוז לפרוסה משמאל לממוצע.", math_expression: "P_{2} = 19" },
            { verbal_explanation: "שלב 4: חיבור הפרוסות לקבלת האזור השלם.", math_expression: "P = 19 + 19 = 38" },
            { verbal_explanation: "שלב 5: התשובה הישירה.", math_expression: "38" }
        ],
        final_answer: "38"
    },

    // ==========================================
    // תת נושא 2: סטיית תקן (10 שאלות)
    // ==========================================

    // שאלה מספר 11
    {
        topic: "normal_dist_372",
        subTopic: "סטיית תקן",
        question_text: "בהתפלגות נורמלית, הממוצע הוא 80. הערך הנמצא במרחק של סטיית תקן אחת מעל הממוצע (בנקודה \\( \\bar{x} + S \\)) הוא 85. מהי סטיית התקן (S) של התפלגות זו?&rlm;",
        options: ["5", "10", "85", "15"],
        correctAnswer: 0,
        hint: "המרחק בין הממוצע (80) לבין הערך המייצג תוספת של סטיית תקן אחת (85) נותן לכם את גודל הסטייה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת הנתונים במשוואה אלגברית המבוססת על הגדרת ציר הפעמון.", math_expression: "\\bar{x} = 80" },
            { verbal_explanation: "שלב 2: הצבת הנתון השני במשוואה.", math_expression: "\\bar{x} + S = 85" },
            { verbal_explanation: "שלב 3: הצבת ערך הממוצע לתוך המשוואה השנייה.", math_expression: "80 + S = 85" },
            { verbal_explanation: "שלב 4: בידוד סטיית התקן על ידי חיסור.", math_expression: "S = 85 - 80" },
            { verbal_explanation: "שלב 5: קבלת ערך סטיית התקן.", math_expression: "S = 5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 12
    {
        topic: "normal_dist_372",
        subTopic: "סטיית תקן",
        question_text: "הממוצע של ציוני בחינה הוא 70, וסטיית התקן היא 8. איזה ציון יימצא בדיוק במרחק של שתי סטיות תקן מתחת לממוצע (בנקודה \\( \\bar{x} - 2S \\))?&rlm;",
        options: ["54", "62", "50", "86"],
        correctAnswer: 0,
        hint: "חסרו מ-70 פעמיים את סטיית התקן (8 כפול 2).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת המשתנים מהשאלה.", math_expression: "\\bar{x} = 70 \\quad , \\quad S = 8" },
            { verbal_explanation: "שלב 2: כתיבת תבנית הנקודה המבוקשת.", math_expression: "x = \\bar{x} - 2S" },
            { verbal_explanation: "שלב 3: הצבת הערכים לתבנית.", math_expression: "x = 70 - 2 \\times 8" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל תחילה.", math_expression: "x = 70 - 16" },
            { verbal_explanation: "שלב 5: ביצוע החיסור למציאת הציון.", math_expression: "x = 54" },
            { verbal_explanation: "שלב 6: הציון המבוקש.", math_expression: "54" }
        ],
        final_answer: "54"
    },

    // שאלה מספר 13
    {
        topic: "normal_dist_372",
        subTopic: "סטיית תקן",
        question_text: "ידוע כי בהתפלגות נורמלית הערך \\( \\bar{x} - S \\) הוא 60, והערך \\( \\bar{x} + S \\) הוא 80. מהי סטיית התקן (S)?&rlm;",
        options: ["10", "20", "5", "70"],
        correctAnswer: 0,
        hint: "המרחק בין הנקודות הללו הוא בדיוק 2 סטיות תקן (ממינוס 1 לפלוס 1). מצאו את המרחק וחלקו ב-2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המרחק הכולל בין שתי הנקודות הנתונות על הציר.", math_expression: "d = 80 - 60 = 20" },
            { verbal_explanation: "שלב 2: הבנה אלגברית שהמרחק הזה מייצג שתי סטיות תקן שלמות.", math_expression: "2S = 20" },
            { verbal_explanation: "שלב 3: חלוקת המשוואה בשתיים לבידוד סטיית התקן.", math_expression: "S = 20 : 2" },
            { verbal_explanation: "שלב 4: התוצאה לסטיית התקן הבודדת.", math_expression: "S = 10" },
            { verbal_explanation: "שלב 5: התשובה למערכת.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 14
    {
        topic: "normal_dist_372",
        subTopic: "סטיית תקן",
        question_text: "ציון 50 נמצא בדיוק 2 סטיות תקן מתחת לממוצע, וציון 90 נמצא בדיוק 2 סטיות תקן מעל הממוצע. מהי סטיית התקן (S) של קבוצת ציונים זו?&rlm;",
        options: ["10", "40", "20", "5"],
        correctAnswer: 0,
        hint: "המרחק בין 50 ל-90 מקיף 4 סטיות תקן בסך הכל (ממינוס 2 עד לפלוס 2). מצאו את ההפרש וחלקו ב-4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב ההפרש בין שני הציונים הקיצוניים שניתנו.", math_expression: "d = 90 - 50 = 40" },
            { verbal_explanation: "שלב 2: הגדרת המרחק הזה ביחידות של סטיות תקן (ממינוס שתיים לפלוס שתיים יש ארבע יחידות).", math_expression: "4S = 40" },
            { verbal_explanation: "שלב 3: חלוקה בארבע כדי למצוא את גודלה של סטיית תקן אחת.", math_expression: "S = 40 : 4" },
            { verbal_explanation: "שלב 4: חישוב התוצאה.", math_expression: "S = 10" },
            { verbal_explanation: "שלב 5: התשובה לרישום.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 15
    {
        topic: "normal_dist_372",
        subTopic: "סטיית תקן",
        question_text: "שתי כיתות נבחנו במבחן זהה. לכיתה א' ממוצע 80 וסטיית תקן 5. לכיתה ב' ממוצע 80 וסטיית תקן 10. באיזו כיתה הציונים פזורים יותר (פחות מרוכזים סביב הממוצע)?&rlm;",
        options: ["כיתה ב'", "כיתה א'", "הפיזור זהה", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "סטיית תקן היא מדד הפיזור. ככל שהיא גדולה יותר, הנתונים רחוקים יותר מהממוצע והפעמון רחב יותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת סטיות התקן של שתי הקבוצות הנתונות.", math_expression: "S_{1} = 5 \\quad , \\quad S_{2} = 10" },
            { verbal_explanation: "שלב 2: זיהוי הקבוצה בעלת הערך הגדול יותר.", math_expression: "10 > 5 \\Rightarrow S_{2} > S_{1}" },
            { verbal_explanation: "שלב 3: ההבנה התיאורטית שסטיית תקן גדולה פירושה פיזור רב יותר של הנתונים באוכלוסייה.", math_expression: "1 = 1" },
            { verbal_explanation: "שלב 4: המסקנה היא שהכיתה השנייה מפוזרת יותר.", math_expression: "1 = 1" },
            { verbal_explanation: "שלב 5: בחירת התשובה מהחלופות.", math_expression: "1" }
        ],
        final_answer: "כיתה ב'"
    },

    // שאלה מספר 16
    {
        topic: "normal_dist_372",
        subTopic: "סטיית תקן",
        question_text: "ממוצע משקל תפוחים הוא 150 גרם וסטיית התקן היא 15 גרם. תפוח מסוים שוקל 195 גרם. במרחק של כמה סטיות תקן הוא נמצא מהממוצע, ובאיזה כיוון?&rlm;",
        options: ["3 סטיות מעל", "2 סטיות מעל", "3 סטיות מתחת", "4 סטיות מעל"],
        correctAnswer: 0,
        hint: "מצאו את ההפרש בין משקל התפוח לממוצע (195 פחות 150). חלקו את ההפרש בסטיית התקן (15).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מרחק התפוח הספציפי מהממוצע בגרמים.", math_expression: "d = 195 - 150 = 45" },
            { verbal_explanation: "שלב 2: התוצאה חיובית, כלומר הערך נמצא מעל הממוצע.", math_expression: "d > 0" },
            { verbal_explanation: "שלב 3: המרת המרחק ליחידות של סטיות תקן (נקרא גם ציון תקן).", math_expression: "Z = \\dfrac{45}{15}" },
            { verbal_explanation: "שלב 4: ביצוע החלוקה.", math_expression: "Z = 3" },
            { verbal_explanation: "שלב 5: שילוב הנתונים מניב 3 סטיות תקן מעל הממוצע.", math_expression: "3" }
        ],
        final_answer: "3 סטיות מעל"
    },

    // שאלה מספר 17
    {
        topic: "normal_dist_372",
        subTopic: "סטיית תקן",
        question_text: "אם ידוע שערך השונות של קבוצת נתונים מתפלגת נורמלית הוא 36, מהי סטיית התקן של הנתונים?&rlm;",
        options: ["6", "1296", "18", "72"],
        correctAnswer: 0,
        hint: "סטיית תקן היא תמיד השורש הריבועי של השונות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הקשר המתמטי ההדוק בין שונות לסטיית תקן.", math_expression: "S = \\sqrt{x}" },
            { verbal_explanation: "שלב 2: הצבת הנתון מהשאלה לתוך השורש.", math_expression: "S = \\sqrt{36}" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הוצאת השורש.", math_expression: "S = 6" },
            { verbal_explanation: "שלב 4: התשובה הישירה בחלופות.", math_expression: "6" }
        ],
        final_answer: "6"
    },

    // שאלה מספר 18
    {
        topic: "normal_dist_372",
        subTopic: "סטיית תקן",
        question_text: "הממוצע של סדרת נתונים הוא 40. ערך הנמצא בדיוק שתי סטיות תקן מתחת לממוצע הוא 30. מהי סטיית התקן?&rlm;",
        options: ["5", "10", "2", "15"],
        correctAnswer: 0,
        hint: "המרחק בין 40 ל-30 הוא 10. המרחק הזה שווה ל-2 סטיות תקן. חלקו ב-2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת תבנית הנקודה מהנתונים.", math_expression: "\\bar{x} - 2S = 30" },
            { verbal_explanation: "שלב 2: הצבת הממוצע הידוע למשוואה.", math_expression: "40 - 2S = 30" },
            { verbal_explanation: "שלב 3: העברת אגפים לבידוד המשתנה.", math_expression: "40 - 30 = 2S" },
            { verbal_explanation: "שלב 4: חיסור.", math_expression: "10 = 2S" },
            { verbal_explanation: "שלב 5: חלוקת המשוואה בשתיים לקבלת סטיית התקן המבוקשת.", math_expression: "S = 5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 19
    {
        topic: "normal_dist_372",
        subTopic: "סטיית תקן",
        question_text: "ממוצע משכורות במפעל הוא 8000 שקלים וסטיית התקן היא 500 שקלים. מהו אחוז העובדים שמרוויחים בין 7500 שקלים ל- 8500 שקלים?&rlm;",
        options: ["68", "34", "95", "19"],
        correctAnswer: 0,
        hint: "התחום המבוקש הוא בדיוק בין הממוצע פחות סטיית תקן אחת (7500), לבין הממוצע ועוד סטיית תקן אחת (8500). חברו את האחוזים בתחום זה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: תרגום הגבול התחתון לציוני תקן במודל הפעמון.", math_expression: "7500 = 8000 - 500 = \\bar{x} - S" },
            { verbal_explanation: "שלב 2: תרגום הגבול העליון של השכר למודל הפעמון.", math_expression: "8500 = 8000 + 500 = \\bar{x} + S" },
            { verbal_explanation: "שלב 3: הגדרת התחום כולו במדדי פעמון.", math_expression: "\\bar{x} - S \\rightarrow \\bar{x} + S" },
            { verbal_explanation: "שלב 4: איסוף האחוזים התקניים השייכים לחלקים אלו מהגרף (ארבע פרוסות מרכזיות).", math_expression: "P = 15 + 19 + 19 + 15" },
            { verbal_explanation: "שלב 5: חיבור האחוזים יחד.", math_expression: "P = 68" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "68" }
        ],
        final_answer: "68"
    },

    // שאלה מספר 20
    {
        topic: "normal_dist_372",
        subTopic: "סטיית תקן",
        question_text: "גובה הצמחים בשדה מתפלג נורמלית. 16% מהצמחים הנמוכים ביותר הם בגובה של פחות מ-20 ס''מ. הממוצע הוא 30 ס''מ. מהי סטיית התקן?&rlm;",
        options: ["10", "5", "20", "2"],
        correctAnswer: 0,
        hint: "הזנב השמאלי המכיל 16% מתחיל בדיוק מתחת לסטיית תקן אחת מהממוצע (0.5+1.5+5+9). לכן, 20 ס''מ שווה לממוצע פחות S.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הנקודה בגרף שמתחתיה יש בדיוק שש עשרה אחוזים מהאוכלוסייה.", math_expression: "P = 16 \\Rightarrow x = \\bar{x} - S" },
            { verbal_explanation: "שלב 2: הצבת הגובה הנתון והממוצע הנתון למשוואה זו.", math_expression: "20 = 30 - S" },
            { verbal_explanation: "שלב 3: החלפת מקומות באגפים לבידוד חיובי של הנעלם.", math_expression: "S = 30 - 20" },
            { verbal_explanation: "שלב 4: ביצוע החיסור.", math_expression: "S = 10" },
            { verbal_explanation: "שלב 5: בחירת התשובה במערכת.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // ==========================================
    // תת נושא 3: ממוצע (10 שאלות)
    // ==========================================

    // שאלה מספר 21
    {
        topic: "normal_dist_372",
        subTopic: "ממוצע",
        question_text: "נתונה עקומת התפלגות נורמלית של ציונים. העקומה סימטרית לחלוטין סביב הציון 75. מהו ממוצע הציונים?&rlm;",
        options: ["75", "100", "0", "לא ניתן לדעת מנתון זה"],
        correctAnswer: 0,
        hint: "בעקומת פעמון נורמלית, ציר הסימטריה המרכזי תמיד מצביע על הממוצע של האוכלוסייה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת חוקי התפלגות נורמלית - ציר הסימטריה הוא המרכז.", math_expression: "x = 75" },
            { verbal_explanation: "שלב 2: הגדרה סטטיסטית קובעת שמרכז הפעמון הוא הממוצע.", math_expression: "\\bar{x} = 75" },
            { verbal_explanation: "שלב 3: אישור התשובה הנבחרת.", math_expression: "75" }
        ],
        final_answer: "75"
    },

    // שאלה מספר 22
    {
        topic: "normal_dist_372",
        subTopic: "ממוצע",
        question_text: "בהתפלגות נורמלית, סטיית התקן היא 10. ציון של 90 נמצא בדיוק סטיית תקן אחת מעל לממוצע. מהו הממוצע?&rlm;",
        options: ["80", "100", "70", "90"],
        correctAnswer: 0,
        hint: "הממוצע פלוס סטיית התקן (10) שווה ל-90. חסרו את ה-10 כדי למצוא את הממוצע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת תבנית הנקודה מהנתונים המילוליים.", math_expression: "\\bar{x} + S = 90" },
            { verbal_explanation: "שלב 2: הצבת ערך סטיית התקן הנתון.", math_expression: "\\bar{x} + 10 = 90" },
            { verbal_explanation: "שלב 3: בידוד הממוצע על ידי חיסור עשר.", math_expression: "\\bar{x} = 90 - 10" },
            { verbal_explanation: "שלב 4: פעולת החיסור מניבה את התוצאה.", math_expression: "\\bar{x} = 80" },
            { verbal_explanation: "שלב 5: בחירת התשובה במערכת.", math_expression: "80" }
        ],
        final_answer: "80"
    },

    // שאלה מספר 23
    {
        topic: "normal_dist_372",
        subTopic: "ממוצע",
        question_text: "נתון כי בהתפלגות נורמלית הערך \\( \\bar{x} - S \\) הוא 50, והערך \\( \\bar{x} + S \\) הוא 70. מהו הממוצע (\\( \\bar{x} \\))?&rlm;",
        options: ["60", "10", "120", "50"],
        correctAnswer: 0,
        hint: "הממוצע נמצא בדיוק באמצע בין הנקודות הללו (שהן סימטריות סביבו). חשבו ממוצע פשוט של המספרים 50 ו-70.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנה מתמטית שהממוצע נמצא בדיוק באמצע הדרך בין סטיות זהות משני צידיו.", math_expression: "\\bar{x} = \\dfrac{x_{1} + x_{2}}{2}" },
            { verbal_explanation: "שלב 2: הצבת הערכים המספריים לתוך ממוצע הקצוות הנתונים.", math_expression: "\\bar{x} = \\dfrac{50 + 70}{2}" },
            { verbal_explanation: "שלב 3: חיבור המונה.", math_expression: "\\bar{x} = \\dfrac{120}{2}" },
            { verbal_explanation: "שלב 4: חלוקת המונה בשתיים להשגת נקודת האמצע.", math_expression: "\\bar{x} = 60" },
            { verbal_explanation: "שלב 5: התשובה הדרושה.", math_expression: "60" }
        ],
        final_answer: "60"
    },

    // שאלה מספר 24
    {
        topic: "normal_dist_372",
        subTopic: "ממוצע",
        question_text: "נתון ש-50% מהאוכלוסייה שוקלים מעל 75 ק''ג (וההתפלגות נורמלית). מהו המשקל הממוצע באוכלוסייה זו?&rlm;",
        options: ["75", "150", "37.5", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "בעקומת פעמון, הנקודה שמעליה נמצאים בדיוק חצי מהנתונים (50%) היא הממוצע עצמו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ניתוח תכונת החציון בהתפלגות. החציון חוצה את האוכלוסייה לחצי (חמישים אחוז).", math_expression: "M_{e} = 75" },
            { verbal_explanation: "שלב 2: על פי חוקי התפלגות נורמלית, החציון מתלכד עם הממוצע.", math_expression: "M_{e} = \\bar{x}" },
            { verbal_explanation: "שלב 3: הסקת המסקנה הישירה על בסיס הכלל.", math_expression: "\\bar{x} = 75" },
            { verbal_explanation: "שלב 4: התשובה לתרגיל.", math_expression: "75" }
        ],
        final_answer: "75"
    },

    // שאלה מספר 25
    {
        topic: "normal_dist_372",
        subTopic: "ממוצע",
        question_text: "בגרף עקומת הפעמון המצורף, נקודת השיא המקסימלית של הגרף מתרחשת כאשר הציון הוא 100. מה הממוצע של הציונים הללו?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 100' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='90' x2='180' y2='90' stroke='#64748b' stroke-width='2'/><path d='M 10 90 Q 50 90 70 50 T 100 10 T 130 50 T 190 90' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='100' cy='10' r='4' fill='#ef4444'/><line x1='100' y1='10' x2='100' y2='90' stroke='#ef4444' stroke-dasharray='4,4' stroke-width='2'/><text x='92' y='105' font-size='12' fill='#334155'>100</text></svg></div>",
        options: ["100", "50", "200", "0"],
        correctAnswer: 0,
        hint: "פסגת הפעמון (נקודת המקסימום של הפונקציה) ממוקמת תמיד על ציר הממוצע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קריאת הנתונים מהגרף המצורף. שיא הגרף (השכיח) ממוקם בנקודה מאה.", math_expression: "x = 100" },
            { verbal_explanation: "שלב 2: שימוש בכלל הבסיסי המקשר בין מדדים בעקומת פעמון.", math_expression: "x = \\bar{x}" },
            { verbal_explanation: "שלב 3: המסקנה היא שהממוצע שווה גם הוא למאה.", math_expression: "\\bar{x} = 100" },
            { verbal_explanation: "שלב 4: אין צורך בחישוב נוסף.", math_expression: "100" }
        ],
        final_answer: "100"
    },

    // שאלה מספר 26
    {
        topic: "normal_dist_372",
        subTopic: "ממוצע",
        question_text: "ידוע כי הציון 40 נמצא שתי סטיות תקן מתחת לממוצע, והציון 70 נמצא סטיית תקן אחת מעל הממוצע. מהו הממוצע עצמו?&rlm;",
        options: ["60", "55", "65", "50"],
        correctAnswer: 0,
        hint: "המרחק בין 40 ל-70 הוא 30 נקודות. במדדי פעמון, המרחק הזה מכסה 3 סטיות תקן. מצאו את סטיית התקן (10), וחשבו את הממוצע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הפער בנקודות בין שני הציונים שסופקו.", math_expression: "d = 70 - 40 = 30" },
            { verbal_explanation: "שלב 2: חישוב הפער בין הנקודות במונחים של סטיות תקן.", math_expression: "S - (-2S) = 3S" },
            { verbal_explanation: "שלב 3: בניית משוואה להשוואת המרחק והסטיות למציאת סטיית התקן הבודדת.", math_expression: "3S = 30 \\Rightarrow S = 10" },
            { verbal_explanation: "שלב 4: שימוש בנתון השני (או הראשון) כדי לחלץ את הממוצע בעזרת סטיית התקן שמצאנו.", math_expression: "\\bar{x} + 10 = 70" },
            { verbal_explanation: "שלב 5: חיסור עשר משני האגפים.", math_expression: "\\bar{x} = 60" },
            { verbal_explanation: "שלב 6: הממוצע הכללי לכיתה.", math_expression: "60" }
        ],
        final_answer: "60"
    },

    // שאלה מספר 27
    {
        topic: "normal_dist_372",
        subTopic: "ממוצע",
        question_text: "קבוצת ציונים מתפלגת נורמלית עם ממוצע 80. המורה מחליטה להוסיף בונוס קבוע של 5 נקודות לכל תלמיד. מה יהיה הממוצע החדש של הכיתה?&rlm;",
        options: ["85", "80", "400", "75"],
        correctAnswer: 0,
        hint: "כאשר מוסיפים קבוע (5) לכל ערכי הקבוצה, הממוצע של הקבוצה גדל באותו הקבוע בדיוק.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בחוק סטטיסטי להוספת קבוע לכלל המדגם.", math_expression: "\\bar{x}_{2} = \\bar{x}_{1} + 5" },
            { verbal_explanation: "שלב 2: הצבת הנתונים של הממוצע הישן והבונוס.", math_expression: "\\bar{x}_{2} = 80 + 5" },
            { verbal_explanation: "שלב 3: פעולת החיבור לקבלת הממוצע העדכני.", math_expression: "\\bar{x}_{2} = 85" },
            { verbal_explanation: "שלב 4: בחירת התשובה הנכונה.", math_expression: "85" }
        ],
        final_answer: "85"
    },

    // שאלה מספר 28
    {
        topic: "normal_dist_372",
        subTopic: "ממוצע",
        question_text: "אם נתון שעבור תכונה מסוימת המתפלגת נורמלית, הממוצע שווה ל-M, מה ניתן לומר בודאות על חציון התכונה באוכלוסייה?&rlm;",
        options: ["שווה ל-M", "גדול מ-M", "קטן מ-M", "תלוי בסטיית התקן"],
        correctAnswer: 0,
        hint: "מודל נורמלי מתאפיין בסימטריה מושלמת שמלכדת את המדדים המרכזיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: היזכרות בהגדרת ההתפלגות הנורמלית כסימטרית לחלוטין.", math_expression: "1 = 1" },
            { verbal_explanation: "שלב 2: בשל צורת הפעמון הסימטרית, אמצע הדרך (החציון) מתלכד לחלוטין עם מרכז הכובד (הממוצע).", math_expression: "M_{e} = \\bar{x}" },
            { verbal_explanation: "שלב 3: מכיוון שנתון שהממוצע הוא אם גדול.", math_expression: "\\bar{x} = M" },
            { verbal_explanation: "שלב 4: המסקנה היא שהחציון מקבל את אותו הערך בדיוק.", math_expression: "M_{e} = M" },
            { verbal_explanation: "שלב 5: התאמה לתשובות בטקסט.", math_expression: "1" }
        ],
        final_answer: "שווה ל-M"
    },

    // שאלה מספר 29
    {
        topic: "normal_dist_372",
        subTopic: "ממוצע",
        question_text: "קיימות שתי קבוצות: לקבוצה א' עקומת פעמון שמרכזה ב-50. לקבוצה ב' עקומת פעמון שמרכזה ב-60. לשתי הקבוצות אותה סטיית תקן. איך ייראה הגרף של קבוצה ב' ביחס לא'?&rlm;",
        options: ["מוזז ימינה ב-10 יחידות ללא שינוי צורה", "מוזז שמאלה ב-10 יחידות", "רחב ונמוך יותר", "צר וגבוה יותר"],
        correctAnswer: 0,
        hint: "סטיית התקן קובעת את הצורה (הרוחב והגובה). הממוצע קובע רק את המיקום האופקי של הגרף (ימינה/שמאלה).",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת סטיות התקן מלמדת שאין שינוי בצורת הפיזור של הפעמונים.", math_expression: "S_{1} = S_{2}" },
            { verbal_explanation: "שלב 2: חישוב ההפרש בין הממוצע של קבוצה ב' לקבוצה א'.", math_expression: "d = 60 - 50 = 10" },
            { verbal_explanation: "שלב 3: התוספת חיובית, משמע כל הגרף נדחף ימינה לאורך ציר איקס בשיעור ההפרש שחישבנו.", math_expression: "d = +10" },
            { verbal_explanation: "שלב 4: המסקנה המושלמת מאיחוד הנתונים.", math_expression: "1" }
        ],
        final_answer: "מוזז ימינה ב-10 יחידות ללא שינוי צורה"
    },

    // שאלה מספר 30
    {
        topic: "normal_dist_372",
        subTopic: "ממוצע",
        question_text: "ידוע שנקודה הנמצאת חצי סטיית תקן (0.5S) מעל הממוצע ערכה 85. סטיית התקן עצמה היא 10. מהו הממוצע?&rlm;",
        options: ["80", "90", "75", "95"],
        correctAnswer: 0,
        hint: "חצי מסטיית התקן זה 5. הנקודה (הממוצע פלוס 5) שווה ל-85. חסרו כדי לחזור לממוצע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב ערכה של חצי סטיית תקן.", math_expression: "0.5 \\times 10 = 5" },
            { verbal_explanation: "שלב 2: כתיבת תבנית הנקודה מהשאלה והשוואתה לנתון.", math_expression: "\\bar{x} + 5 = 85" },
            { verbal_explanation: "שלב 3: חיסור חמש משני האגפים לבידוד הממוצע המבוקש.", math_expression: "\\bar{x} = 85 - 5" },
            { verbal_explanation: "שלב 4: התוצאה הסופית של הממוצע.", math_expression: "\\bar{x} = 80" },
            { verbal_explanation: "שלב 5: בחירת התשובה במערכת.", math_expression: "80" }
        ],
        final_answer: "80"
    },

    // ==========================================
    // תת נושא 4: חישוב הסתברות לפי תחומים (10 שאלות)
    // ==========================================

    // שאלה מספר 31
    {
        topic: "normal_dist_372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: "משקל תיקים מתפלג נורמלית עם ממוצע של 70 ק''ג וסטיית תקן של 10 ק''ג. מה ההסתברות (באחוזים) לבחור תיק ששוקל יותר מ-80 ק''ג?&rlm;",
        options: ["16", "34", "50", "84"],
        correctAnswer: 0,
        hint: "80 ק''ג זה בדיוק סטיית תקן אחת מעל הממוצע. סכמו את האחוזים מהנקודה הזו וימינה עד לקצה הגרף (9+5+1.5+0.5, או 50 פחות 34).",
        solution_steps: [
            { verbal_explanation: "שלב 1: המרת המשקל הנתון למונחי ציר הפעמון.", math_expression: "80 = 70 + 10 = \\bar{x} + S" },
            { verbal_explanation: "שלב 2: הגדרת התחום המבוקש לאחוזים.", math_expression: "x > \\bar{x} + S" },
            { verbal_explanation: "שלב 3: איסוף האחוזים הקבועים מגרף הפעמון החל מנקודה זו ימינה.", math_expression: "P = 9 + 5 + 1.5 + 0.5" },
            { verbal_explanation: "שלב 4: סכימת הפרוסות לקבלת האחוז הכולל (או חיסור ה-34% הראשונים מ-50%).", math_expression: "P = 16" },
            { verbal_explanation: "שלב 5: המסקנה היא 16 אחוזים.", math_expression: "16" }
        ],
        final_answer: "16"
    },

    // שאלה מספר 32
    {
        topic: "normal_dist_372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: "ציוני מבחן כניסה מתפלגים נורמלית עם ממוצע 500 וסטיית תקן 50. מה ההסתברות לבחור נבחן שציונו נמצא בין 450 ל-550?&rlm;",
        options: ["68", "34", "95", "38"],
        correctAnswer: 0,
        hint: "התחום המבוקש מונח בדיוק בין מינוס סטיית תקן אחת לפלוס סטיית תקן אחת (סימטרי סביב הממוצע).",
        solution_steps: [
            { verbal_explanation: "שלב 1: תרגום הגבול התחתון לנקודה על הגרף.", math_expression: "450 = 500 - 50 = \\bar{x} - S" },
            { verbal_explanation: "שלב 2: תרגום הגבול העליון לנקודה על הגרף.", math_expression: "550 = 500 + 50 = \\bar{x} + S" },
            { verbal_explanation: "שלב 3: כתיבת האחוזים הכלולים בתחום המרכזי והסימטרי הזה.", math_expression: "P = 15 + 19 + 19 + 15" },
            { verbal_explanation: "שלב 4: סכימת הפרוסות למציאת ההסתברות הכוללת.", math_expression: "P = 68" },
            { verbal_explanation: "שלב 5: התשובה הדרושה.", math_expression: "68" }
        ],
        final_answer: "68"
    },

    // שאלה מספר 33
    {
        topic: "normal_dist_372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: "זמן ההמתנה לאוטובוס מתפלג נורמלית עם ממוצע של 100 שניות וסטיית תקן של 15 שניות. מהי ההסתברות שנוסע ימתין פחות מ-85 שניות?&rlm;",
        options: ["16", "34", "84", "50"],
        correctAnswer: 0,
        hint: "הזמן 85 שניות הוא בדיוק סטיית תקן אחת מתחת לממוצע. חשבו את הזנב השמאלי הקיצוני עד לנקודה זו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הזמן על הציר למציאת המרחק התקני שלו מהממוצע.", math_expression: "85 = 100 - 15 = \\bar{x} - S" },
            { verbal_explanation: "שלב 2: איסוף הפרוסות המרכיבות את הזנב השמאלי (משמאל למינוס אחת).", math_expression: "P = 0.5 + 1.5 + 5 + 9" },
            { verbal_explanation: "שלב 3: חיבור האחוזים (או חיסור 34% מהמחצית השמאלית של 50%).", math_expression: "P = 50 - (19 + 15) = 16" },
            { verbal_explanation: "שלב 4: תוצאת ההסתברות לאירוע.", math_expression: "16" },
            { verbal_explanation: "שלב 5: הרישום לבדיקה.", math_expression: "16" }
        ],
        final_answer: "16"
    },

    // שאלה מספר 34
    {
        topic: "normal_dist_372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: "גובה כלבים מסוג מסוים מתפלג נורמלית עם ממוצע 60 ס''מ וסטיית תקן של 5 ס''מ. מה ההסתברות לבחור כלב שגובהו בין 60 ל-70 ס''מ?&rlm;",
        options: ["48", "34", "47.5", "95"],
        correctAnswer: 0,
        hint: "התחום מתחיל בממוצע ומסתיים ב-2 סטיות תקן מעליו (60 פלוס 10). סכמו את הפרוסות בטווח זה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הגבול התחתון כנקודת הממוצע בדיוק.", math_expression: "60 = \\bar{x}" },
            { verbal_explanation: "שלב 2: זיהוי הגבול העליון המרוחק עשר ס''מ (פעמיים סטיית תקן) מהממוצע.", math_expression: "70 = 60 + 2 \\times 5 = \\bar{x} + 2S" },
            { verbal_explanation: "שלב 3: רישום הפרוסות התקניות המכסות את הטווח בין הממוצע לפלוס שתי סטיות.", math_expression: "P = 19 + 15 + 9 + 5" },
            { verbal_explanation: "שלב 4: סכימת האחוזים.", math_expression: "P = 48" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "48" }
        ],
        final_answer: "48"
    },

    // שאלה מספר 35
    {
        topic: "normal_dist_372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: "במפעל מיוצרים 1000 חלקים ביום. אורך החלקים מתפלג נורמלית עם ממוצע 200 מ''מ וסטיית תקן 20 מ''מ. מתוך הייצור היומי, כמה חלקים (במספר, לא באחוזים) צפויים להיות באורך שגדול מ-220 מ''מ?&rlm;",
        options: ["160", "340", "500", "840"],
        correctAnswer: 0,
        hint: "חשבו קודם את האחוז של חלקים הגדולים מ-220 (סטיית תקן אחת מעל הממוצע). לאחר מכן, חשבו כמה זה האחוז הזה מתוך 1000.",
        solution_steps: [
            { verbal_explanation: "שלב 1: תרגום האורך המבוקש למדד על גרף הפעמון.", math_expression: "220 = 200 + 20 = \\bar{x} + S" },
            { verbal_explanation: "שלב 2: מציאת האחוז של האוכלוסייה מעל נקודה זו (הזנב הימני).", math_expression: "P = 9 + 5 + 1.5 + 0.5 = 16" },
            { verbal_explanation: "שלב 3: כתיבת תרגיל למציאת הכמות המספרית מתוך סך הייצור על פי האחוז שנמצא.", math_expression: "m = \\dfrac{16}{100} \\times 1000" },
            { verbal_explanation: "שלב 4: ביצוע פעולות הכפל והחילוק.", math_expression: "m = 0.16 \\times 1000 = 160" },
            { verbal_explanation: "שלב 5: תוצאת הכמות הצפויה של חלקים אלו.", math_expression: "160" }
        ],
        final_answer: "160"
    },

    // שאלה מספר 36
    {
        topic: "normal_dist_372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: "מהירות נסיעה בכביש מתפלגת נורמלית עם ממוצע 80 קמ''ש וסטיית תקן 8 קמ''ש. נהגים שנוסעים מעל 96 קמ''ש מקבלים קנס אוטומטי. מה ההסתברות (באחוזים) לקבל קנס בכביש זה?&rlm;",
        options: ["2", "5", "0.5", "16"],
        correctAnswer: 0,
        hint: "96 קמ''ש נמצא במרחק של 16 קמ''ש מהממוצע, כלומר 2 סטיות תקן. חברו את האחוזים של שתי הפרוסות הקיצוניות ביותר מימין.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המרחק של סף הקנס מהממוצע, ותרגומו למספר סטיות תקן.", math_expression: "96 = 80 + 2 \\times 8 = \\bar{x} + 2S" },
            { verbal_explanation: "שלב 2: הגדרת התחום המבקש ערכים גדולים מסף זה.", math_expression: "x > \\bar{x} + 2S" },
            { verbal_explanation: "שלב 3: קריאת האחוזים משתי הפרוסות האחרונות בקצה הימני של הגרף הרשמי.", math_expression: "P = 1.5 + 0.5" },
            { verbal_explanation: "שלב 4: חיבור לקבלת ההסתברות הכוללת לקנס.", math_expression: "P = 2" },
            { verbal_explanation: "שלב 5: בחירת התשובה המתאימה.", math_expression: "2" }
        ],
        final_answer: "2"
    },

    // שאלה מספר 37
    {
        topic: "normal_dist_372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: "חיי נורה מתפלגים נורמלית עם ממוצע של 3000 שעות וסטיית תקן של 200 שעות. מה ההסתברות לבחור נורה שתחזיק בין 2600 ל-3400 שעות?&rlm;",
        options: ["96", "68", "95", "99"],
        correctAnswer: 0,
        hint: "התחום ממוקם סימטרית בין מינוס 2 סטיות תקן לפלוס 2 סטיות תקן. חשבו את הסכום הכולל של הפרוסות בתחום זה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: תרגום הגבול התחתון. הוא נמוך ב-400 שעות, המהוות שתי סטיות תקן שלמות.", math_expression: "2600 = 3000 - 2 \\times 200 = \\bar{x} - 2S" },
            { verbal_explanation: "שלב 2: תרגום הגבול העליון. הוא גבוה ב-400 שעות, כלומר פלוס שתי סטיות תקן.", math_expression: "3400 = 3000 + 2 \\times 200 = \\bar{x} + 2S" },
            { verbal_explanation: "שלב 3: כתיבת סכום האחוזים של כל הפרוסות המרכזיות (ממינוס שתיים עד פלוס שתיים).", math_expression: "P = 5 + 9 + 15 + 19 + 19 + 15 + 9 + 5" },
            { verbal_explanation: "שלב 4: דרך קצרה יותר היא להכפיל את הצד הימני (48%) בשתיים עקב הסימטריה.", math_expression: "P = 48 \\times 2" },
            { verbal_explanation: "שלב 5: תוצאת החיבור או הכפל.", math_expression: "P = 96" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "96" }
        ],
        final_answer: "96"
    },

    // שאלה מספר 38
    {
        topic: "normal_dist_372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: "גובה בנים בכיתה מתפלג נורמלית סביב ממוצע 170 ס''מ עם סטיית תקן של 10 ס''מ. מה ההסתברות לבחור בן שגובהו בין 165 ס''מ ל-175 ס''מ?&rlm;",
        options: ["38", "34", "68", "19"],
        correctAnswer: 0,
        hint: "שימו לב: המרחק מהממוצע הוא 5 ס''מ בלבד לכל כיוון. זוהי בדיוק חצי סטיית תקן. חברו את שתי הפרוסות הראשונות שצמודות לממוצע משני צידיו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת המרחק התקני של הגבולות החדשים מהממוצע (חמש ס''מ הם חצי סטייה).", math_expression: "165 = \\bar{x} - 0.5S \\quad , \\quad 175 = \\bar{x} + 0.5S" },
            { verbal_explanation: "שלב 2: איסוף האחוז של הפרוסה הצמודה משמאל לממוצע.", math_expression: "P_{1} = 19" },
            { verbal_explanation: "שלב 3: איסוף האחוז של הפרוסה הצמודה מימין לממוצע.", math_expression: "P_{2} = 19" },
            { verbal_explanation: "שלב 4: סכימת שני החלקים ליצירת ההסתברות המרכזית הדרושה.", math_expression: "P = 19 + 19 = 38" },
            { verbal_explanation: "שלב 5: המסקנה לרישום הפלט.", math_expression: "38" }
        ],
        final_answer: "38"
    },

    // שאלה מספר 39
    {
        topic: "normal_dist_372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: "הישגי קפיצה לרוחק מתפלגים נורמלית. הממוצע הוא 50 מטר (תחום אחר) וסטיית התקן היא 4 מטר. בתחרות השתתפו 500 קופצים. כמה מהם קפצו למרחק שבין 42 ל-58 מטרים? (ענו במספר קופצים).&rlm;",
        options: ["480", "475", "340", "250"],
        correctAnswer: 0,
        hint: "חשבו קודם את האחוז: 42 זה שתי סטיות מתחת (מינוס 8), 58 זה שתי סטיות מעל (פלוס 8). האחוז הוא 96%. מצאו כמה זה מתוך 500.",
        solution_steps: [
            { verbal_explanation: "שלב 1: המרת גבולות הקפיצה לציוני תקן כדי לדעת איזה אחוז הם מכסים.", math_expression: "42 = \\bar{x} - 2S \\quad , \\quad 58 = \\bar{x} + 2S" },
            { verbal_explanation: "שלב 2: חישוב האחוז המכסה את השטח שבין מינוס שתיים לפלוס שתי סטיות.", math_expression: "P = 48 + 48 = 96" },
            { verbal_explanation: "שלב 3: כתיבת תרגיל להמרת האחוז הסטטיסטי לכמות אנשים אבסולוטית מהמדגם הנתון.", math_expression: "m = \\dfrac{96}{100} \\times 500" },
            { verbal_explanation: "שלב 4: ביצוע הפעולות במחשבון לחילוץ הכמות.", math_expression: "m = 0.96 \\times 500 = 480" },
            { verbal_explanation: "שלב 5: התשובה הישירה למערכת.", math_expression: "480" }
        ],
        final_answer: "480"
    },

    // שאלה מספר 40
    {
        topic: "normal_dist_372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: "אורך חיים של סוללה מסוימת מתפלג נורמלית עם ממוצע 40 שבועות וסטיית תקן של 2 שבועות. מה ההסתברות לבחור סוללה שתתקלקל לפני שעברו 35 שבועות?&rlm;",
        options: ["0.5", "1.5", "2", "5"],
        correctAnswer: 0,
        hint: "המרחק של 35 מהממוצע (40) הוא 5 שבועות, כלומר 2.5 סטיות תקן למטה. בדקו מהו האחוז שנשאר בקצה השמאלי ביותר, מתחת למינוס 2.5 סטיות תקן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מרחק היעד מהממוצע.", math_expression: "d = 40 - 35 = 5" },
            { verbal_explanation: "שלב 2: תרגום המרחק לסטיות תקן.", math_expression: "Z = 5 : 2 = 2.5" },
            { verbal_explanation: "שלב 3: קביעת נקודת הגבול על ציר הפעמון.", math_expression: "x = \\bar{x} - 2.5S" },
            { verbal_explanation: "שלב 4: זיהוי השטח המבוקש שמתחת (לפני) נקודה זו. זוהי הפרוסה האחרונה בגרף של משרד החינוך.", math_expression: "P = 0.5" },
            { verbal_explanation: "שלב 5: אישור התשובה הנבחרת מתוך האופציות.", math_expression: "0.5" }
        ],
        final_answer: "0.5"
    }
];