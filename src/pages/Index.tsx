
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, BarChart3, Settings, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      title: 'Appointment Management',
      description: 'Schedule, edit, and manage all patient appointments with ease'
    },
    {
      icon: Users,
      title: 'Patient Information',
      description: 'Store and access comprehensive patient details and contact information'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track appointment trends and get insights into your practice'
    },
    {
      icon: Settings,
      title: 'Admin Controls',
      description: 'Full administrative control over all appointments and settings'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">HealthAdmin</h1>
            </div>
            <Button 
              onClick={() => navigate('/admin')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Access Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Healthcare Admin
              <span className="text-blue-600 block">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Streamline your healthcare practice with our comprehensive admin dashboard. 
              Manage appointments, track patient information, and maintain complete control 
              over your medical facility operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate('/admin')}
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Open Admin Dashboard
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-gray-300 hover:bg-gray-50"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Admin Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage your healthcare facility efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of healthcare professionals who trust our admin dashboard 
            to manage their practice efficiently and provide better patient care.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/admin')}
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold">HealthAdmin</h3>
          </div>
          <p className="text-gray-400">
            © 2024 HealthAdmin. Streamlining healthcare management worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
