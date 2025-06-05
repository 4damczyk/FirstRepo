using TMPro;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class PointManager : MonoBehaviour
{
    public int score = 0;
    public TextMeshProUGUI scoreText;
    public TextMeshProUGUI gameOverText;
    public TextMeshProUGUI topScoreText;
    public GameObject restartButton;

    private bool isGameOver = false;
    private int topScore = 0;

    private int mousePointsPenalty = -5;
    private int pointThreshold1 = 50;
    private int pointThreshold2 = 100;

    public void AddPoints(int points)
    {
        if (isGameOver) return;

        score += points;
        scoreText.text = score.ToString();

        topScore = Mathf.Max(topScore, score);

        if (score >= pointThreshold2)
        {
            mousePointsPenalty = -20;
        }
        else if (score >= pointThreshold1)
        {
            mousePointsPenalty = -10;
        }

        if (score < 0)
        {
            GameOver();
        }
    }

    private void GameOver()
    {
        isGameOver = true;

        gameOverText.gameObject.SetActive(true);
        topScoreText.gameObject.SetActive(true);

        topScoreText.text = "Top Score: " + topScore;

        restartButton.SetActive(true);
    }

    public void RestartGame()
    {
        isGameOver = false;
        score = 0;
        topScore = 0;
        scoreText.text = score.ToString();

        mousePointsPenalty = -5;

        gameOverText.gameObject.SetActive(false);
        topScoreText.gameObject.SetActive(false);
        restartButton.SetActive(false);

        
        ObjectSpawner objectSpawner = FindObjectOfType<ObjectSpawner>();
        if (objectSpawner != null)
        {
            objectSpawner.ResetSpawner(); 
        }
        
        
        PlayerController playerController = FindObjectOfType<PlayerController>();
        if (playerController != null)
        {
            playerController.ResetBasketPosition(); 
        }
    }

    public bool IsGameOver()
    {
        return isGameOver;
    }

    public int GetMousePointsPenalty()
    {
        return mousePointsPenalty;
    }
}




