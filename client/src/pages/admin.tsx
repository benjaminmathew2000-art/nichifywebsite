import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Contact {
  id: number;
  name: string;
  email: string;
  company?: string;
  projectType: string;
  services: string;
  customService?: string;
  message: string;
  createdAt: string;
}

export function AdminPage() {
  const { data: contacts = [], isLoading, error } = useQuery({
    queryKey: ['/api/contacts'],
    queryFn: async (): Promise<Contact[]> => {
      try {
        const response = await fetch('/api/contacts');
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        return response.json();
      } catch (error) {
        console.log('Local contacts not available:', error);
        return []; // Return empty array if local API is not available
      }
    },
    refetchInterval: 10000, // Auto refresh every 10 seconds
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Enquiries</h1>
          <div className="text-center">Loading enquiries...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Enquiries</h1>
          <div className="text-center text-red-600">Error loading enquiries: {error.message}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Contact Enquiries</h1>
          <div className="text-sm text-gray-500">
            {contacts.length} total enquiries • Auto-refresh every 5s
          </div>
        </div>

        {contacts.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">No enquiries found. Try submitting a test enquiry through the contact form.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {contacts.map((contact) => (
              <Card key={contact.id}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <span className="text-lg">{contact.name}</span>
                      {contact.company && (
                        <span className="text-sm text-gray-500 ml-2">({contact.company})</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(contact.createdAt).toLocaleString()}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div>
                      <strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">{contact.email}</a>
                    </div>
                    <div>
                      <strong>Project Type:</strong> {contact.projectType}
                    </div>
                    <div>
                      <strong>Services:</strong> {contact.services}
                      {contact.customService && (
                        <span className="text-gray-600"> (Custom: {contact.customService})</span>
                      )}
                    </div>
                    <div>
                      <strong>Message:</strong>
                      <p className="mt-1 text-gray-700 bg-gray-50 p-3 rounded">{contact.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}