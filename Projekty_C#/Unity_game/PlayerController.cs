using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public float speed = 10f;
    private Vector3 resetPosition;
    private float screenWidthUnits;

    void Start()
    {
        resetPosition = transform.position;
        float screenWidth = Screen.width;
        screenWidthUnits = Camera.main.ScreenToWorldPoint(new Vector3(screenWidth, 0, 0)).x;
    }

    void Update()
    {
        if (FindObjectOfType<PointManager>().IsGameOver()) return;

        HandleTouchInput();
    }

    private void HandleTouchInput()
    {
        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);
            Vector3 touchPosition = Camera.main.ScreenToWorldPoint(new Vector3(touch.position.x, 0, 0));

            Vector3 targetPosition = new Vector3(
                Mathf.Clamp(touchPosition.x, -screenWidthUnits, screenWidthUnits),
                transform.position.y,
                transform.position.z
            );

            transform.position = Vector3.Lerp(transform.position, targetPosition, Time.deltaTime * speed);
        }
    }

    public void ResetBasketPosition()
    {
        transform.position = resetPosition;
    }
}


