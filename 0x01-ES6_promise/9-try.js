export default function guardrail(mathFunction) {
  const queue = [];
  try {
    // Execute the mathFunction and append its result to the queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // Catch any error and append the error message to the queue
    queue.push(error.message);
  }
  // Always append the final message to the queue
  queue.push('Guardrail was processed');
  return queue;
}

