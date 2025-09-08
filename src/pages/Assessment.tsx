import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isComplete, setIsComplete] = useState(false);

  const questions = [
    {
      id: 'age',
      question: 'What is your age?',
      type: 'select',
      options: ['18-25', '26-35', '36-45', '46-55', '55+']
    },
    {
      id: 'primary_concern',
      question: 'What is your primary health concern?',
      type: 'select',
      options: ['PCOS symptoms', 'Perimenopause symptoms', 'General wellness', 'Hormonal imbalance', 'Other']
    },
    {
      id: 'symptoms',
      question: 'Which symptoms are you experiencing? (Select all that apply)',
      type: 'multiple',
      options: [
        'Irregular periods',
        'Weight gain',
        'Acne',
        'Hair loss',
        'Mood swings',
        'Hot flashes',
        'Sleep issues',
        'Low energy',
        'Digestive issues'
      ]
    },
    {
      id: 'lifestyle',
      question: 'How would you describe your current lifestyle?',
      type: 'select',
      options: ['Very active', 'Moderately active', 'Sedentary', 'Varies greatly']
    },
    {
      id: 'diet',
      question: 'What best describes your diet?',
      type: 'select',
      options: ['Vegetarian', 'Vegan', 'Omnivore', 'Keto/Low-carb', 'Mediterranean', 'No specific diet']
    },
    {
      id: 'supplements',
      question: 'Are you currently taking any supplements or medications?',
      type: 'select',
      options: ['Yes, supplements only', 'Yes, medications only', 'Yes, both', 'No, neither']
    },
    {
      id: 'goals',
      question: 'What are your main wellness goals? (Select all that apply)',
      type: 'multiple',
      options: [
        'Regulate menstrual cycle',
        'Manage weight',
        'Improve energy levels',
        'Better sleep',
        'Clearer skin',
        'Mood stability',
        'Overall wellness'
      ]
    }
  ];

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getRecommendation = () => {
    const primaryConcern = answers.primary_concern;
    const symptoms = answers.symptoms || [];
    
    if (primaryConcern === 'PCOS symptoms' || symptoms.includes('Irregular periods')) {
      return {
        pathway: 'PCOS Management',
        products: ['PCOS Balance Formula', 'Hormone Support Blend'],
        description: 'Based on your responses, we recommend our PCOS-focused pathway with targeted supplements and lifestyle guidance.'
      };
    } else if (primaryConcern === 'Perimenopause symptoms' || symptoms.includes('Hot flashes')) {
      return {
        pathway: 'Perimenopause Support',
        products: ['Perimenopause Support', 'Mood & Energy Blend'],
        description: 'Your responses suggest our Perimenopause pathway would be most beneficial for managing your transition.'
      };
    } else {
      return {
        pathway: 'General Wellness',
        products: ['Wellness Starter Kit', 'Daily Vitality Blend'],
        description: 'We recommend starting with our comprehensive wellness approach to address your overall health goals.'
      };
    }
  };

  if (isComplete) {
    const recommendation = getRecommendation();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-purple-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your Personalized Wellness Path
            </h1>
            
            <div className="bg-gradient-to-r from-emerald-50 to-purple-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {recommendation.pathway}
              </h2>
              <p className="text-gray-700 mb-6">
                {recommendation.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {recommendation.products.map((product, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-semibold text-gray-900">{product}</h3>
                    <p className="text-sm text-gray-600">Recommended for your journey</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                View Recommended Products
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
                Book Consultation
              </button>
            </div>
            
            <p className="text-sm text-gray-600 mt-6">
              Results saved to your account. You can always retake this assessment.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Personalized Wellness Assessment
          </h1>
          <p className="text-xl text-gray-600">
            Help us understand your unique needs to create your perfect wellness journey
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentStep + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-emerald-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3 mb-8">
            {currentQuestion.type === 'select' && (
              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentQuestion.id, option)}
                    className={`p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      answers[currentQuestion.id] === option
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {currentQuestion.type === 'multiple' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = (answers[currentQuestion.id] || []).includes(option);
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        const current = answers[currentQuestion.id] || [];
                        const updated = isSelected
                          ? current.filter((item: string) => item !== option)
                          : [...current, option];
                        handleAnswer(currentQuestion.id, updated);
                      }}
                      className={`p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                          : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous
            </button>

            <button
              onClick={nextStep}
              disabled={!answers[currentQuestion.id]}
              className={`flex items-center px-8 py-3 rounded-lg font-semibold transition-colors ${
                answers[currentQuestion.id]
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Trust Message */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            🔒 Your responses are confidential and used only to personalize your wellness journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assessment;