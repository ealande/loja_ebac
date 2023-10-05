import { ModalContent, ModalWrapper } from './styles'
import { Props as ProdutosProps } from '../../components/ProdutoCard'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal
