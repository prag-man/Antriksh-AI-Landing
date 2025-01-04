import { ChatBubbleBottomCenterTextIcon, CogIcon, GlobeAltIcon, ChartBarIcon, MegaphoneIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  { name: 'Chatbots', icon: ChatBubbleBottomCenterTextIcon },
  { name: 'Marketing Automation', icon: CogIcon },
  { name: 'Helpdesks', icon: UserGroupIcon },
  { name: 'SEO Agents', icon: GlobeAltIcon },
  { name: 'Social Media Management', icon: MegaphoneIcon },
  { name: 'Analytics', icon: ChartBarIcon },
]

export default function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center font-space-grotesk">Our AI-Powered Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="p-6 border border-gray-800 rounded-lg">
              <feature.icon className="h-12 w-12 mb-4 text-gray-300" />
              <h3 className="text-xl font-semibold mb-2 font-space-grotesk">{feature.name}</h3>
              <p className="text-gray-400 font-inter">Leverage AI to optimize your {feature.name.toLowerCase()} strategy and boost engagement.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

