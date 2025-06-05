using UnityEngine;

public class DestroyPlace : MonoBehaviour
{
    
    public GameObject outOfBoundsArea;

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Apple") || other.CompareTag("Pineapple") || other.CompareTag("Watermelon") || 
            other.CompareTag("Mouse"))
        {
            Destroy(other.gameObject);
        }
    }
}
