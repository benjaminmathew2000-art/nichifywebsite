/**
 * Simple contact form submission
 */

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  services: string;
  customService?: string;
  message: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  id?: number;
}

/**
 * Submit contact form - simple and reliable
 */
export async function submitContactForm(data: ContactFormData): Promise<ContactSubmissionResult> {
  const submissionData = {
    ...data,
    source: window.location.hostname
  };

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(submissionData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to submit enquiry');
  }
  
  const result = await response.json();
  return {
    success: true,
    message: 'Enquiry submitted successfully!',
    id: result.contact?.id
  };
}

/**
 * Validate contact form data
 */
export function validateContactForm(data: ContactFormData): string[] {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  if (!data.projectType) {
    errors.push('Please select a project type');
  }

  if (!data.services || data.services.trim().length === 0) {
    errors.push('Please select at least one service');
  }

  return errors;
}

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}