import { useState } from 'react';
import {
  FaPlay,
  FaRedo,
  FaTrophy,
  FaCheckCircle,
  FaTimesCircle,
  FaQuestionCircle,
  FaLightbulb
} from 'react-icons/fa';
import kuisData from '../data/kuis.json';
import { getRandomItems } from '../utils/helpers';
import styles from './KuisBudaya.module.css';

const KuisBudaya = () => {
  const [gameState, setGameState] = useState('START'); // 'START' | 'PLAYING' | 'RESULT'
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    const selected = getRandomItems(kuisData, 10);
    setCurrentQuestions(selected);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setGameState('PLAYING');
  };

  const handleSelectOption = (idx) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(idx);
    setIsAnswerSubmitted(true);
    if (idx === currentQuestions[currentIndex].jawaban) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < currentQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setGameState('RESULT');
    }
  };

  const getScoreMessage = (finalScore) => {
    if (finalScore === 10) {
      return {
        title: 'Luar Biasa, Sempurna!',
        desc: 'Anda adalah seorang Ahli Budaya Nusantara sejati!',
        badgeClass: styles.badgePerfect,
      };
    } else if (finalScore >= 7) {
      return {
        title: 'Hebat Sekali!',
        desc: 'Pengetahuan Anda tentang Indonesia sangat kaya dan mendalam.',
        badgeClass: styles.badgeGreat,
      };
    } else if (finalScore >= 4) {
      return {
        title: 'Cukup Baik!',
        desc: 'Terus tingkatkan wawasan Anda tentang kekayaan budaya negeri kita tercinta.',
        badgeClass: styles.badgeGood,
      };
    } else {
      return {
        title: 'Ayo Belajar Lagi!',
        desc: 'Jangan menyerah! Telusuri halaman galeri dan destinasi untuk mengenal Indonesia lebih dekat.',
        badgeClass: styles.badgeKeepLearning,
      };
    }
  };

  const currentQ = currentQuestions[currentIndex];

  return (
    <main className={styles.page}>
      <header className="page-header">
        <div className="container">
          <h1>Kuis Budaya Nusantara</h1>
          <p>Uji sejauh mana wawasan Anda tentang pesona kekayaan Indonesia</p>
          <div className="ornament-divider">
            <span>✦</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.quizWrapper}>
            {/* START STATE */}
            {gameState === 'START' && (
              <div className={styles.startCard}>
                <div className={styles.startIconWrapper}>
                  <FaQuestionCircle className={styles.startIcon} />
                </div>
                <h2 className={styles.startTitle}>Tantang Pengetahuanmu!</h2>
                <p className={styles.startText}>
                  Kuis ini terdiri dari <strong>10 pertanyaan pilihan ganda</strong> acak mengenai destinasi wisata, tradisi, kuliner, dan situs bersejarah di Indonesia.
                </p>
                <div className={styles.infoPills}>
                  <span className={styles.infoPill}>10 Pertanyaan</span>
                  <span className={styles.infoPill}>Pilihan Ganda</span>
                  <span className={styles.infoPill}>Penjelasan Lengkap</span>
                </div>
                <button className={`btn btn-primary ${styles.startBtn}`} onClick={startQuiz}>
                  <FaPlay /> Mulai Kuis Sekarang
                </button>
              </div>
            )}

            {/* PLAYING STATE */}
            {gameState === 'PLAYING' && currentQ && (
              <div className={styles.quizCard}>
                {/* Header Progress */}
                <div className={styles.progressContainer}>
                  <div className={styles.progressMeta}>
                    <span className={styles.questionCounter}>
                      Soal {currentIndex + 1} dari {currentQuestions.length}
                    </span>
                    <span className={styles.currentScoreBadge}>
                      Skor Sementara: {score}
                    </span>
                  </div>
                  <div className={styles.progressBarBg}>
                    <div
                      className={styles.progressBarFill}
                      style={{
                        width: `${((currentIndex + 1) / currentQuestions.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Question Text */}
                <h3 className={styles.questionText}>{currentQ.pertanyaan}</h3>

                {/* Options List */}
                <div className={styles.optionsGrid}>
                  {currentQ.pilihan.map((option, idx) => {
                    let optionStatus = '';
                    if (isAnswerSubmitted) {
                      if (idx === currentQ.jawaban) {
                        optionStatus = styles.optionCorrect;
                      } else if (idx === selectedAnswer) {
                        optionStatus = styles.optionWrong;
                      } else {
                        optionStatus = styles.optionDisabled;
                      }
                    } else if (selectedAnswer === idx) {
                      optionStatus = styles.optionSelected;
                    }

                    return (
                      <button
                        key={idx}
                        className={`${styles.optionBtn} ${optionStatus}`}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isAnswerSubmitted}
                      >
                        <span className={styles.optionLetter}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className={styles.optionLabel}>{option}</span>
                        {isAnswerSubmitted && idx === currentQ.jawaban && (
                          <FaCheckCircle className={styles.statusIconCorrect} />
                        )}
                        {isAnswerSubmitted && idx === selectedAnswer && idx !== currentQ.jawaban && (
                          <FaTimesCircle className={styles.statusIconWrong} />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                {isAnswerSubmitted && (
                  <div className={styles.explanationBox}>
                    <div className={styles.explanationHeader}>
                      <FaLightbulb className={styles.lightbulbIcon} />
                      <strong>
                        {selectedAnswer === currentQ.jawaban
                          ? 'Jawaban Anda Benar!'
                          : 'Jawaban Kurang Tepat'}
                      </strong>
                    </div>
                    <p className={styles.explanationText}>{currentQ.penjelasan}</p>
                    <button
                      className={`btn btn-primary ${styles.nextBtn}`}
                      onClick={handleNextQuestion}
                    >
                      {currentIndex + 1 < currentQuestions.length
                        ? 'Soal Berikutnya →'
                        : 'Lihat Hasil Akhir 🏆'}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* RESULT STATE */}
            {gameState === 'RESULT' && (
              <div className={styles.resultCard}>
                <div className={styles.trophyWrapper}>
                  <FaTrophy className={styles.trophyIcon} />
                </div>
                <h2 className={styles.resultHeading}>Hasil Kuis Budaya</h2>

                <div className={styles.scoreCircle}>
                  <span className={styles.scoreNumber}>{score}</span>
                  <span className={styles.scoreTotal}>/ {currentQuestions.length}</span>
                </div>

                <div className={`${styles.resultBadge} ${getScoreMessage(score).badgeClass}`}>
                  <h3>{getScoreMessage(score).title}</h3>
                  <p>{getScoreMessage(score).desc}</p>
                </div>

                <div className={styles.resultActionRow}>
                  <button className="btn btn-primary" onClick={startQuiz}>
                    <FaRedo /> Coba Kuis Lagi
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default KuisBudaya;

