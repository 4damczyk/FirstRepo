using UnityEngine;

public class ObjectSpawner : MonoBehaviour
{
    public GameObject[] objectsToSpawn;
    public float spawnInterval = 2f;
    private bool isGameOver = false;

    void Start()
    {
        InvokeRepeating("SpawnObject", 1f, spawnInterval);
    }

    void Update()
    {
        CheckGameOver();
    }

    void SpawnObject()
    {
        if (isGameOver) return;

        int index = Random.Range(0, objectsToSpawn.Length);
        Vector3 spawnPosition = new Vector3(Random.Range(-3f, 3f), 5f, 0);

        Instantiate(objectsToSpawn[index], spawnPosition, Quaternion.identity);
    }

    void CheckGameOver()
    {
        PointManager pointManager = FindObjectOfType<PointManager>();
        if (pointManager != null && pointManager.IsGameOver())
        {
            isGameOver = true;
            CancelInvoke("SpawnObject");
        }
    }

    public void ResetSpawner()
    {
        isGameOver = false;
        InvokeRepeating("SpawnObject", 1f, spawnInterval);
    }
}





