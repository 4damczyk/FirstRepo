using UnityEngine;

public class ObjectCatch : MonoBehaviour
{
    public int points;

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("Player"))
        {
            PointManager pointManager = Object.FindFirstObjectByType<PointManager>();

            if (pointManager != null)
            {
                if (gameObject.CompareTag("Mouse"))
                {
                    int penalty = pointManager.GetMousePointsPenalty();
                    pointManager.AddPoints(penalty);
                }
                else
                {
                    pointManager.AddPoints(points);
                }
            }
            else
            {
                Debug.LogError("PointManager not found in the scene.");
            }
            Destroy(gameObject);
        }
    }
}



